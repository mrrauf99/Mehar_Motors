import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactSection } from "@/components/contact-section";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles } from "@/data/vehicles";

const featuredVehicles = [vehicles[6], vehicles[8]];

function FleetPreview() {
  return (
    <section className="fleet-section section-shell" id="fleet" aria-labelledby="fleet-title">
      <div className="section-heading" data-reveal>
        <div><h2 id="fleet-title">Which car fits<br /><em>your plans?</em></h2></div>
        <div className="section-heading-side">
          <p className="section-intro">
            Choose from sedans, a sports car and SUVs. Ask us about the price and the dates you need.
          </p>
          <Link className="underlined-link" href="/fleet">See all ten cars <ArrowIcon /></Link>
        </div>
      </div>

      <div className="fleet-grid fleet-grid-home">
        {vehicles.slice(0, 4).map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.id} />
        ))}
      </div>
      <p className="image-disclosure">
        Prices are examples and may change. Message us for the current price and to check if a car is available.
      </p>
    </section>
  );
}

function FeaturedCollection() {
  return (
    <section className="collection-section" aria-labelledby="collection-title">
      <div className="collection-inner section-shell">
        <div className="collection-copy" data-reveal>
          <h2 id="collection-title">Range Rover<br /><em>Land Cruiser.</em></h2>
          <p>Message us to ask the price and check if it's available for your dates.</p>
          <Link className="button button-light" href="/fleet">See all ten cars <ArrowIcon /></Link>
        </div>
        <div className="collection-photos">
          {featuredVehicles.map((vehicle, index) => (
            <figure className={`collection-photo collection-photo-${index + 1}`} key={vehicle.id} data-reveal>
              <div>
                <Image src={vehicle.image} alt={vehicle.alt} fill sizes="(max-width: 760px) 86vw, 38vw" quality={75} />
              </div>
              <figcaption><span>{vehicle.name}</span><span>{vehicle.category}</span></figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FleetIntroduction() {
  return (
    <div className="about-band">
      <section className="about-section section-shell" id="about" aria-labelledby="about-title">
        <div className="about-image-wrap" data-reveal>
          <span className="about-image-rule" aria-hidden="true" />
          <div className="about-image">
            <Image src="/images/land-rover-defender.webp" alt="Land Rover Defender" fill sizes="(max-width: 760px) 86vw, 47vw" quality={75} />
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title">Ten cars to<br /><em>choose from.</em></h2>
          <p>Choose from luxury sedans, a sports car, SUVs and everyday cars.</p>
          <p>Tell us which car you want and when. We'll confirm the details, price, whether it's available and the rental rules.</p>
          <Link className="underlined-link" href="/services">What to check before you book <ArrowIcon /></Link>
        </div>
      </section>
    </div>
  );
}

function BookingSteps() {
  return (
    <section className="approach-section" aria-labelledby="approach-title">
      <div className="approach-inner section-shell">
        <div className="approach-intro" data-reveal>
          <h2 id="approach-title">Tell us which car<br /><em>and when you need it.</em></h2>
          <p>Let us know when you need the car and for how long.</p>
          <Link className="underlined-link" href="/services">Before you book <ArrowIcon /></Link>
        </div>
        <ol className="approach-list">
          <li data-reveal>
            <span className="step-number">1</span>
            <div><h3>Choose a car</h3><p>Ask which year and version are available for your dates.</p></div>
          </li>
          <li data-reveal>
            <span className="step-number">2</span>
            <div><h3>Tell us when</h3><p>Share your start date and how long you need the car.</p></div>
          </li>
          <li data-reveal>
            <span className="step-number">3</span>
            <div><h3>Check the details</h3><p>Confirm the price, pickup arrangements and rental rules before you book.</p></div>
          </li>
        </ol>
      </div>
    </section>
  );
}

export function HomeSections() {
  return (
    <>
      <FleetPreview />
      <FeaturedCollection />
      <FleetIntroduction />
      <BookingSteps />
      <ContactSection />
    </>
  );
}
