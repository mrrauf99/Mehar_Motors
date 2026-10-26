import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactSection } from "@/components/contact-section";
import { PageHero } from "@/components/page-hero";
import { SiteFrame } from "@/components/site-frame";
import { vehicles } from "@/data/vehicles";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Before You Book | Mehar Motors",
  description: "Find out what to ask about the car, rate, dates and rental terms before you book with Mehar Motors.",
  openGraph: {
    title: "Before You Book | Mehar Motors",
    description: "What to ask about the car, rate, availability and rental terms.",
    type: "website",
    ...(siteUrl ? { url: `${siteUrl}/services` } : {})
  },
  twitter: {
    card: "summary_large_image",
    title: "Before You Book | Mehar Motors",
    description: "What to ask about the car, rate, availability and rental terms."
  },
  ...(siteUrl ? { alternates: { canonical: "/services" } } : {})
};

const steps = [
  {
    title: "Choose a car",
    text: "Ask which year and trim are available for your dates."
  },
  {
    title: "Tell us when",
    text: "Share your start date and how long you need the car."
  },
  {
    title: "Check the details",
    text: "Ask about the full rate, pickup arrangements and rental terms before you confirm."
  }
];

export default function ServicesPage() {
  return (
    <SiteFrame>
      <main id="main">
        <PageHero
          current="Before you book"
          path="/services"
          title="Before you"
          emphasis="book."
          intro="Tell us which car you want and when you need it. We'll confirm the rate, availability and rental terms before you book."
          vehicle={vehicles[2]}
        />

        <section className="service-steps section-shell" aria-labelledby="steps-title">
          <div className="section-heading" data-reveal>
            <div>
              <h2 id="steps-title">Tell us three<br /><em>things.</em></h2>
            </div>
            <p className="section-intro">Tell us which car you want, your dates and how long you'll need it. We'll check what's available.</p>
          </div>
          <ol className="service-step-list">
            {steps.map((step, index) => (
              <li key={step.title} data-reveal>
                <span className="step-number">{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="service-note-band">
          <section className="service-note section-shell" aria-labelledby="booking-details-title">
            <div className="service-note-copy" data-reveal>
              <h2 id="booking-details-title">Confirm the details<br />before you book.</h2>
              <p>Ask us to confirm the car, full daily rate, pickup arrangements and rental terms for your dates.</p>
              <Link className="button button-primary" href="/fleet">Browse the fleet <ArrowIcon /></Link>
            </div>
            <ul className="booking-checklist">
              <li data-reveal><div><h3>Car details</h3><p>Confirm the model year, trim and condition.</p></div></li>
              <li data-reveal><div><h3>Full rate</h3><p>Ask what the daily rate includes.</p></div></li>
              <li data-reveal><div><h3>Pickup and return</h3><p>Agree where and when you'll collect and return the car.</p></div></li>
              <li data-reveal><div><h3>Rental terms</h3><p>Review mileage, fuel, deposit and late-return terms.</p></div></li>
            </ul>
          </section>
        </div>
        <ContactSection />
      </main>
    </SiteFrame>
  );
}
