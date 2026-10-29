"use client";

import { useEffect, useRef } from "react";

export function DimensionalSurface({ children, className = "" }) {
  const surface = useRef(null);
  useEffect(() => {
    const element = surface.current;
    const preference = window.matchMedia("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame;
    function reset() {
      cancelAnimationFrame(frame);
      element.style.removeProperty("--tilt-x");
      element.style.removeProperty("--tilt-y");
    }
    function move(event) {
      if (!preference.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = element.getBoundingClientRect();
        element.style.setProperty("--tilt-x", `${-(event.clientY - bounds.top - bounds.height / 2) / bounds.height * 5}deg`);
        element.style.setProperty("--tilt-y", `${(event.clientX - bounds.left - bounds.width / 2) / bounds.width * 7}deg`);
      });
    }
    element.addEventListener("pointermove", move);
    element.addEventListener("pointerleave", reset);
    preference.addEventListener("change", reset);
    return () => {
      reset();
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerleave", reset);
      preference.removeEventListener("change", reset);
    };
  }, []);
  return <div ref={surface} className={`dimensional-surface ${className}`}>{children}</div>;
}
