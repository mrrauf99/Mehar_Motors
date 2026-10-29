"use client";

import { useSyncExternalStore } from "react";

function getCurrentYear() {
  return new Date().getFullYear();
}

function subscribe(callback) {
  const timer = window.setInterval(callback, 60_000);
  window.addEventListener("focus", callback);
  return () => {
    window.clearInterval(timer);
    window.removeEventListener("focus", callback);
  };
}

export function CurrentYear({ initialYear }) {
  return useSyncExternalStore(subscribe, getCurrentYear, () => initialYear);
}
