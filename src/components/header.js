"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowIcon } from "@/components/arrow-icon";

const links = [
  { href: "/#top", label: "Home" },
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
  const selectLink = (event, link) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return;
    if (link.href === "/#top" && pathname === "/") {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? "instant" : "smooth" });
    }
    setActiveHash(link.href.startsWith("/#") ? link.href.slice(1) : "");
    closeMenu();
  };

  const isActiveLink = (link) => {
    if (link.href === "/#top") return pathname === "/" && (!activeHash || activeHash === "#top");
    return link.href.startsWith("/#")
      ? pathname === "/" && activeHash === link.href.slice(1)
      : pathname === link.href;
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
    const desktop = window.matchMedia("(min-width: 961px)");
    const closeOnDesktop = (event) => {
      if (!event.matches) return;
      const header = menuButtonRef.current?.closest("header");
      const focusInMenu = header?.querySelector(".mobile-nav")?.contains(document.activeElement);
      if (focusInMenu || document.activeElement === menuButtonRef.current) {
        header?.querySelector(".brand")?.focus();
      }
      setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

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

  const renderLinks = (mobile = false) => links.map((link) => {
    const active = isActiveLink(link);
    return (
      <Link
        href={link.href}
        key={link.href}
        className={active ? "is-active" : undefined}
        aria-current={active ? (link.href.includes("#") && link.href !== "/#top" ? "location" : "page") : undefined}
        tabIndex={mobile && !menuOpen ? -1 : undefined}
        onClick={(event) => selectLink(event, link)}
      >
        {link.label}{mobile && <ArrowIcon />}
      </Link>
    );
  });

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/#top" onClick={(event) => selectLink(event, links[0])}>
          <Image className="brand-logo" src="/brand_logo.webp" alt="" width={1491} height={1055} sizes="(max-width: 430px) 64px, (max-width: 960px) 72px, 88px" loading="eager" />
          <span className="brand-name">
            <span>Mehar</span>
            <span>Motors</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {renderLinks()}
        </nav>

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

      <nav
        className={`mobile-nav${menuOpen ? " is-open" : ""}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {renderLinks(true)}

      </nav>
    </header>
  );
}
