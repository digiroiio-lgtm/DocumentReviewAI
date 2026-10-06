#!/usr/bin/env node
/**
 * Post-build site verification. Run against a running server:
 *   npm run build && npm start &   then   BASE_URL=http://localhost:3000 npm run verify
 * Checks: routes render, one H1, unique metadata, canonicals, robots meta,
 * OG/Twitter tags, JSON-LD validity, internal links/anchors, sitemap, robots.txt,
 * banner + disclaimer presence, definition length.
 */
const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");
const ORIGIN = "https://documentreviewai.com";
const INDEXABLE = ["/", "/what-is-document-review", "/ai-document-review", "/contract-document-review", "/document-review-use-cases", "/document-review-software"];
const ALL = [...INDEXABLE, "/domain"];

let failures = 0;
const fail = (m) => { failures++; console.log(`  FAIL ${m}`); };
const ok = (m) => console.log(`  ok   ${m}`);
const check = (cond, pass, bad) => (cond ? ok(pass) : fail(bad ?? pass));

const get = async (p) => { const r = await fetch(BASE + p, { redirect: "manual" }); return { status: r.status, text: await r.text(), headers: r.headers }; };
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const strip = (h) => decode(h.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();
const words = (s) => (s.match(/\S+/g) || []).length;
const meta = (html, attr, name) => { const m = html.match(new RegExp(`<meta[^>]+${attr}="${name}"[^>]*content="([^"]*)"`)) || html.match(new RegExp(`<meta[^>]+content="([^"]*)"[^>]*${attr}="${name}"`)); return m ? decode(m[1]) : null; };

const pagesData = {};
const titles = new Map(), descs = new Map();

for (const path of ALL) {
  console.log(`\n${path}`);
  const { status, text: html } = await get(path);
  check(status === 200, "status 200", `status ${status}`);
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  check(h1s === 1, "exactly one H1", `${h1s} H1 elements`);
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1];
  const desc = meta(html, "name", "description");
  check(!!title, `title: ${decode(title || "")}`, "missing <title>");
  check(!!desc && desc.length >= 70 && desc.length <= 175, `description (${desc?.length} chars)`, `description length ${desc?.length}`);
  if (titles.has(title)) fail(`duplicate title with ${titles.get(title)}`); else titles.set(title, path);
  if (descs.has(desc)) fail(`duplicate description with ${descs.get(desc)}`); else descs.set(desc, path);
  const canonical = (html.match(/<link[^>]+rel="canonical"[^>]*href="([^"]*)"/) || html.match(/<link[^>]+href="([^"]*)"[^>]*rel="canonical"/) || [])[1];
  const expected = path === "/" ? ORIGIN : ORIGIN + path;
  check(canonical === expected, `canonical ${canonical}`, `canonical ${canonical} !== ${expected}`);
  const robots = meta(html, "name", "robots") || "";
  if (path === "/domain") check(/noindex/.test(robots) && /follow/.test(robots) && !/nofollow/.test(robots), `robots: ${robots}`, `/domain robots meta is "${robots}"`);
  else check(!/noindex/.test(robots), `indexable (robots: ${robots || "default"})`, `robots meta blocks indexing: ${robots}`);
  for (const [attr, n] of [["property", "og:title"], ["property", "og:description"], ["property", "og:image"], ["property", "og:url"], ["name", "twitter:card"], ["name", "twitter:title"], ["name", "twitter:description"], ["name", "twitter:image"]]) {
    if (!meta(html, attr, n)) fail(`missing ${n}`);
  }
  check(meta(html, "property", "og:url") === expected, "og:url matches canonical");
  check((meta(html, "property", "og:image") || "").startsWith(ORIGIN + "/og-default.png"), "og:image absolute");
  check(/<div class="sale-banner"/.test(html), "domain sale banner present");
  check(html.includes("does not provide legal, compliance, insurance, medical or other professional advice"), "footer disclaimer present");
  check(html.includes('id="editorial-standards"'), "editorial standards present");
  // JSON-LD
  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  if (path === "/domain") check(ld.length === 0, "no JSON-LD on noindex page"); else {
    check(ld.length === 1, "one JSON-LD block", `${ld.length} JSON-LD blocks`);
    try {
      const data = JSON.parse(ld[0].replace(/\\u003c/g, "<"));
      const types = data["@graph"].map((n) => n["@type"]);
      ok(`JSON-LD types: ${types.join(", ")}`);
      const crumbNode = data["@graph"].find((n) => n["@type"] === "BreadcrumbList");
      if (crumbNode) {
        const visible = [...html.matchAll(/<li class="breadcrumbs__item">([\s\S]*?)<\/li>/g)].map((m) => strip(m[1]));
        const ldNames = crumbNode.itemListElement.map((i) => i.name);
        check(JSON.stringify(visible) === JSON.stringify(ldNames), `breadcrumb JSON-LD matches visible (${visible.join(" > ")})`);
      }
      const art = data["@graph"].find((n) => n["@type"] === "Article");
      if (art) check(art.headline === decode(strip((html.match(/<h1[\s\S]*?<\/h1>/) || [""])[0])), "Article headline equals visible H1");
      const dm = html.match(/Last updated: <time dateTime="([^"]+)"/) || html.match(/Last updated: <time datetime="([^"]+)"/);
      const wp = data["@graph"].find((n) => n["@type"] === "WebPage");
      check(!!dm && wp?.dateModified === dm[1], "dateModified matches visible 'Last updated'");
    } catch (e) { fail(`JSON-LD parse error: ${e.message}`); }
  }
  // definition length
  const def = (html.match(/class="definition__text">([\s\S]*?)<\/p>/) || [])[1];
  if (def && path !== "/domain") { const w = words(strip(def)); check(w >= 40 && w <= 80, `definition ${w} words`, `definition ${w} words (need 40-80)`); }
  // word count of <main>
  const main = (html.match(/<main[\s\S]*?<\/main>/) || [""])[0];
  console.log(`  info main word count: ${words(strip(main))}`);
  pagesData[path] = { html, ids: new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])) };
}

// Internal links and anchors
console.log("\nInternal links");
let linkCount = 0;
for (const [from, { html }] of Object.entries(pagesData)) {
  for (const m of html.matchAll(/<a\s[^>]*href="([^"]+)"/g)) {
    const href = decode(m[1]);
    if (/^(https?:|mailto:|tel:)/.test(href)) continue;
    linkCount++;
    const [p, hash] = href.split("#");
    const target = p === "" ? from : p;
    if (!(target in pagesData)) {
      const r = await get(target);
      if (r.status !== 200) { fail(`${from} -> ${href} (status ${r.status})`); continue; }
      pagesData[target] = { html: r.text, ids: new Set([...r.text.matchAll(/\sid="([^"]+)"/g)].map((x) => x[1])) };
    }
    if (hash && !pagesData[target].ids.has(hash)) fail(`${from} -> ${href} (anchor #${hash} not found)`);
  }
}
check(failures === 0 || true, `${linkCount} internal links checked`);

// Sitemap + robots
console.log("\n/sitemap.xml");
const sm = await get("/sitemap.xml");
const locs = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
check(sm.status === 200 && locs.length === 6, `6 URLs: ${locs.join(", ")}`, `got ${locs.length} URLs`);
for (const p of INDEXABLE) if (!locs.includes(p === "/" ? ORIGIN : ORIGIN + p)) fail(`sitemap missing ${p}`);
check(!locs.some((l) => l.includes("/domain")), "/domain excluded from sitemap");
console.log("\n/robots.txt");
const rb = await get("/robots.txt");
check(rb.status === 200 && /User-Agent: \*/i.test(rb.text) && /Allow: \//i.test(rb.text), "allows crawlers");
check(rb.text.includes(`Sitemap: ${ORIGIN}/sitemap.xml`), "references sitemap");
console.log("\n/404");
const nf = await get("/does-not-exist");
check(nf.status === 404, "unknown route returns 404", `status ${nf.status}`);
check(/noindex/.test(nf.text), "404 is noindex");

console.log(`\n${failures === 0 ? "ALL CHECKS PASSED" : failures + " CHECK(S) FAILED"}`);
process.exit(failures === 0 ? 0 : 1);
