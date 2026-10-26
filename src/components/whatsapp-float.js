export function WhatsAppFloat({ href }) {
  if (!href) return null;

  return (
    <a
      className="whatsapp-float"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Ask Mehar Motors about a rental on WhatsApp"
      title="Ask about rates and availability"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2.5a9.45 9.45 0 0 0-8.08 14.35L2.7 21.5l4.8-1.17A9.5 9.5 0 1 0 12 2.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M16.13 13.96c-.23-.12-1.37-.68-1.58-.76-.21-.08-.37-.12-.53.12-.16.23-.6.76-.74.91-.14.16-.28.18-.51.06-.23-.12-.98-.36-1.87-1.14-.69-.62-1.16-1.38-1.3-1.61-.14-.23-.02-.36.1-.48.1-.1.23-.28.35-.42.12-.14.16-.23.23-.39.08-.16.04-.3-.02-.42-.06-.12-.53-1.27-.72-1.74-.19-.45-.38-.39-.53-.4h-.45c-.16 0-.42.06-.63.3-.22.23-.82.8-.82 1.96s.84 2.28.96 2.44c.12.16 1.66 2.54 4.02 3.56.56.24 1 .39 1.34.5.56.18 1.07.15 1.47.09.45-.07 1.37-.56 1.56-1.1.2-.54.2-1 .14-1.1-.06-.1-.21-.16-.45-.28Z" />
      </svg>
    </a>
  );
}
