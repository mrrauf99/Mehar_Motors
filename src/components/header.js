"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icon";
import { generalWhatsAppUrl } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our cars" },
  { href: "/services", label: "Before you book" },
  { href: "/#about", label: "About us" },
  { href: "/#contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const menuButtonRef = useRef(null);
  const closeMenu = () => setMenuOpen(false);
  const selectLink = (link) => {
    setActiveHash(link.href.startsWith("/#") ? link.href.slice(1) : "");
    closeMenu();
  };

  useEffect(() => {
    const updateHash = () => setActiveHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    window.addEventListener("popstate", updateHash);
    return () => {
      window.removeEventListener("hashchange", updateHash);
      window.removeEventListener("popstate", updateHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleEscape = (event) => {
      if (event.key !== "Escape") return;
      closeMenu();
      menuButtonRef.current?.focus();
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" onClick={closeMenu}>
          <Image className="brand-logo" src="/brand_logo.webp" alt="" width={1491} height={1055} sizes="(max-width: 430px) 58px, 72px" loading="eager" />
          <span className="brand-name">
            <span>Mehar</span>
            <span>Motors</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => {
            const active = link.href.startsWith("/#")
              ? pathname === "/" && activeHash === link.href.slice(1)
              : pathname === link.href && (!activeHash || link.href !== "/");
            return (
              <Link
                href={link.href}
                key={link.href}
                className={active ? "is-active" : undefined}
                aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined}
                onClick={() => selectLink(link)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          {generalWhatsAppUrl && (
            <a className="header-cta" href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp <ArrowIcon />
            </a>
          )}
          <button
            ref={menuButtonRef}
            className="menu-toggle"
            type="button"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {links.map((link) => {
          const active = link.href.startsWith("/#")
            ? pathname === "/" && activeHash === link.href.slice(1)
            : pathname === link.href && (!activeHash || link.href !== "/");
          return (
            <Link
              href={link.href}
              key={link.href}
              className={active ? "is-active" : undefined}
              aria-current={active ? (link.href.includes("#") ? "location" : "page") : undefined}
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => selectLink(link)}
            >
              {link.label}<ArrowIcon />
            </Link>
          );
        })}
        {generalWhatsAppUrl && (
          <a className="mobile-nav-cta" href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
            Message us on WhatsApp <ArrowIcon />
          </a>
        )}
      </nav>
    </header>
  );
}
