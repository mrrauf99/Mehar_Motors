import { ArrowIcon } from "@/components/arrow-icon";
import { generalWhatsAppUrl, whatsAppNumber } from "@/lib/site";

export function ContactSection() {
  return (
    <div className="contact-band">
      <section className="contact-section section-shell" id="contact" aria-labelledby="contact-title" data-reveal>
        <div className="contact-copy">
          <h2 id="contact-title">Tell us the car and your dates.</h2>
          <p>Send us your preferred model and dates. We’ll confirm the rate, availability and rental terms with you.</p>
          {whatsAppNumber && <p className="contact-number">WhatsApp <span>+{whatsAppNumber}</span></p>}
        </div>
        {generalWhatsAppUrl ? (
          <a className="button button-primary" href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
            Ask on WhatsApp <ArrowIcon />
          </a>
        ) : (
          <output className="contact-unavailable">WhatsApp contact details are unavailable right now.</output>
        )}
      </section>
    </div>
  );
}
