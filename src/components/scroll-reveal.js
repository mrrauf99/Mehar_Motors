"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll("[data-reveal]");
    if (reduceMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.setAttribute("data-visible", "true"));
      return undefined;
    }

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.setAttribute("data-visible", "true");
        activeObserver.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    const observeItems = (root = document) => {
      root.querySelectorAll("[data-reveal]:not([data-visible])").forEach((item) => observer.observe(item));
    };
    const revealInView = () => {
      document.querySelectorAll("[data-reveal]").forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          item.setAttribute("data-visible", "true");
          observer.unobserve(item);
        }
      });
      observeItems();
    };
    const mutations = new MutationObserver(() => observeItems());
    mutations.observe(document.body, { childList: true, subtree: true });
    observeItems();
    window.addEventListener("hashchange", revealInView);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("hashchange", revealInView);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
