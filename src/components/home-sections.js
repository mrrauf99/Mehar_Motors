import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactSection } from "@/components/contact-section";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles } from "@/data/vehicles";

function FleetPreview() {
  return (
    <section className="fleet-section section-shell" id="fleet" aria-labelledby="fleet-title">
      <div className="section-heading" data-reveal>
        <div><h2 id="fleet-title">Find your<br /><em>kind of drive.</em></h2></div>
        <div className="section-heading-side">
          <p className="section-intro">
            Executive sedans, a sports coupe and SUVs. Find the right fit for your journey.
          </p>
          <Link className="underlined-link" href="/fleet">See all ten cars <ArrowIcon /></Link>
        </div>
      </div>

      <div className="fleet-grid fleet-grid-home">
        {vehicles.slice(0, 4).map((vehicle) => (
          <VehicleCard vehicle={vehicle} key={vehicle.id} imageSizes="(max-width: 370px) calc(100vw - 2rem), (max-width: 700px) 89.6vw, (max-width: 1504px) 44vw, 660px" />
        ))}
      </div>
      <p className="image-disclosure">
        Illustrative vehicle images and sample daily rates. Confirm specifications and a current quote before booking.
      </p>
    </section>
  );
}

function FleetIntroduction() {
  return (
    <div className="about-band">
      <section className="about-section section-shell" id="about" aria-labelledby="about-title">
        <div className="about-image-wrap" data-reveal>
          <div className="about-image">
            <Image src={vehicles[6].image} alt={vehicles[6].alt} fill sizes="(max-width: 760px) 86vw, 47vw" quality={75} />
          </div>
        </div>
        <div className="about-copy" data-reveal>
          <h2 id="about-title">The Mehar<br /><em>approach.</em></h2>
          <p>A considered choice of cars, from everyday comfort to an occasion worth dressing for.</p>
          <p>Choose your car with clarity. Confirm the model, price and rental terms before making a booking.</p>
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
          <h2 id="approach-title">Your next trip,<br /><em>in three steps.</em></h2>
          <p>Let us know when you need the car and for how long.</p>
          <Link className="underlined-link" href="/services">Before you book <ArrowIcon /></Link>
        </div>
        <ol className="approach-list">
          <li data-reveal>
            <div><h3>Choose a car</h3><p>Ask which year and version are available for your dates.</p></div>
          </li>
          <li data-reveal>
            <div><h3>Tell us when</h3><p>Share your start date and how long you need the car.</p></div>
          </li>
          <li data-reveal>
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
      <FleetIntroduction />
      <BookingSteps />
      <ContactSection />
    </>
  );
}
