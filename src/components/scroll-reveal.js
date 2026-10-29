"use client";

import { useEffect } from "react";

export function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) return undefined;

    const observed = new WeakSet();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.setAttribute("data-visible", "true");
        observer.unobserve(entry.target);
      }
    }, { rootMargin: "0px 0px -7% 0px", threshold: 0.08 });

    const revealInView = (items) => {
      const visible = items.filter((item) => {
        const rect = item.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
      });
      for (const item of visible) {
        item.setAttribute("data-visible", "true");
        observer.unobserve(item);
      }
    };
    const observeItems = (root) => {
      const items = [...root.querySelectorAll("[data-reveal]:not([data-visible])")];
      if (root instanceof Element && root.matches("[data-reveal]:not([data-visible])")) items.unshift(root);
      const pending = items.filter((item) => !observed.has(item));
      revealInView(pending);
      for (const item of pending) {
        observed.add(item);
        if (!item.hasAttribute("data-visible")) observer.observe(item);
      }
    };
    const onHashChange = () => revealInView([...document.querySelectorAll("[data-reveal]:not([data-visible])")]);

    observeItems(document);
    document.documentElement.classList.add("motion-ready");
    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) observeItems(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", onHashChange);
    return () => {
      observer.disconnect();
      mutations.disconnect();
      window.removeEventListener("hashchange", onHashChange);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
}
