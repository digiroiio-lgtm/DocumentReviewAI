"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
}

interface SiteNavProps {
  items: readonly NavItem[];
  saleUrl: string;
  saleIsExternal: boolean;
}

/**
 * Desktop links + accessible mobile disclosure menu. The menu closes on route
 * change (it is "open for this pathname only") and on Escape.
 */
export function SiteNav({ items, saleUrl, saleIsExternal }: SiteNavProps) {
  const pathname = usePathname();
  const [openedAt, setOpenedAt] = useState<string | null>(null);
  const isOpen = openedAt === pathname;

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenedAt(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const saleProps = saleIsExternal
    ? { target: "_blank", rel: "nofollow noopener noreferrer" }
    : {};

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <ul className="site-nav__list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="site-nav__link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <a href={saleUrl} className="btn btn--outline btn--sm site-header__cta" {...saleProps}>
        Domain for Sale
      </a>

      <button
        type="button"
        className="menu-toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        onClick={() => setOpenedAt(isOpen ? null : pathname)}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <span className="menu-toggle__bars" aria-hidden="true" />
      </button>

      <nav
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Mobile"
        hidden={!isOpen}
      >
        <ul className="mobile-menu__list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="mobile-menu__link"
                aria-current={pathname === item.href ? "page" : undefined}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <a href={saleUrl} className="mobile-menu__link mobile-menu__link--sale" {...saleProps}>
              Domain for Sale
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
