const paths = {
  "up-right": "M4 12 12 4M5 4h7v7",
  down: "M8 2v12m0 0 5-5m-5 5-5-5",
  up: "M8 14V2m0 0L3 7m5-5 5 5"
};

export function ArrowIcon({ direction = "up-right" }) {
  return (
    <svg className="arrow-icon" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path d={paths[direction] ?? paths["up-right"]} />
    </svg>
  );
}
