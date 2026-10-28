import { ArrowIcon } from "@/components/arrow-icon";
import { generalWhatsAppUrl, whatsAppNumber } from "@/lib/site";

export function ContactSection() {
  return (
    <div className="contact-band">
      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title" data-reveal>
        <div className="contact-copy">
          <h2 id="contact-title">Tell us which car you need.</h2>
          <p>Send us the dates you need it. We'll confirm the price, whether it's available and the rental details.</p>
          {whatsAppNumber && <p className="contact-number">WhatsApp <span>+{whatsAppNumber}</span></p>}
        </div>
        {generalWhatsAppUrl ? (
          <a className="button button-primary" href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            Message us on WhatsApp <ArrowIcon />
          </a>
        ) : (
          <output className="contact-unavailable">Our WhatsApp number isn't available yet.</output>
        )}
      </section>
    </div>
  );
}
