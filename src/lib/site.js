export const brandName = "Mehar Motors";

function getSiteUrl() {
  const value = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!value) return undefined;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.hostname !== "localhost") return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

function getWhatsAppNumber() {
  const value = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim();
  if (!value || !/^\+?[1-9]\d{7,14}$/.test(value)) return undefined;
  return value.replace(/^\+/, "");
}

export const siteUrl = getSiteUrl();
export const whatsAppNumber = getWhatsAppNumber();

export function createWhatsAppUrl(number, message) {
  if (!number || !message) return undefined;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function createInquiryMessage({ vehicle, date, duration }) {
  const lines = [
    vehicle === "rental vehicle"
      ? `Hi ${brandName}, I'm looking to rent a car. Could you tell me the price per day and whether it's available?`
      : `Hi ${brandName}, I'd like to rent the ${vehicle}. Could you tell me the price per day and whether it's available?`,
    date && `I'd like to start on ${date}.`,
    duration && `I need the car for ${duration}.`
  ].filter(Boolean);

  return lines.join("\n");
}

export const generalWhatsAppUrl = createWhatsAppUrl(
  whatsAppNumber,
  createInquiryMessage({ vehicle: "rental vehicle" })
);

export function formatDailyRate(rate) {
  if (typeof rate !== "number" || rate <= 0) return "Price on request";
  return `PKR ${new Intl.NumberFormat("en-PK").format(rate)}`;
}
