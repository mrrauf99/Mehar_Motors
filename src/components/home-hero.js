"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowIcon } from "@/components/arrow-icon";
import { vehicles } from "@/data/vehicles";
import { formatDailyRate } from "@/lib/site";

const showcase = [vehicles[0], vehicles[2], vehicles[3]];

export function HomeHero() {
  const [selected, setSelected] = useState(0);
  const vehicle = showcase[selected];
  return (
    <section className="showroom-hero" id="top" aria-labelledby="hero-title">
      <div className="showroom-heading section-shell">
        <div className="showroom-copy">
          <h1 id="hero-title">A finer way<br />to get there.</h1>
          <p>Luxury car rental, by Mehar Motors. Discover the car that makes the journey yours.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/fleet">Explore the fleet <ArrowIcon /></Link>
          </div>
        </div>
        <div className="showroom-scene">
          <div className="showroom-depth">
            <div className="showroom-image" key={vehicle.id}>
              <Image src={vehicle.image} alt={vehicle.alt} fill sizes="(max-width: 880px) 100vw, (max-width: 1504px) 57vw, 850px" quality={84} loading="eager" fetchPriority="high" />
            </div>
          </div>
        </div>
      </div>
      <div className="showroom-bottom section-shell">
        <fieldset className="showroom-selector" aria-label="Preview a vehicle">
          {showcase.map((car, index) => <button key={car.id} type="button" aria-pressed={selected === index} onClick={() => setSelected(index)}>{car.name.replace("Mercedes-Benz ", "").replace("Land Rover ", "")}</button>)}
        </fieldset>
        <div className="showroom-details" aria-live="polite" aria-atomic="true">
          <span>{vehicle.name}</span>
          <span>{formatDailyRate(vehicle.sampleDailyRatePKR)} / day</span>
        </div>
      </div>
      <p className="showroom-caption section-shell">Concept imagery. Exact vehicle and availability confirmed on inquiry.</p>
    </section>
  );
}
