import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { SiteFrame } from "@/components/site-frame";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles } from "@/data/vehicles";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Our Car Fleet | Mehar Motors",
  description: "Browse all ten cars in the Mehar Motors fleet. Ask about the daily rate and availability for your dates.",
  openGraph: {
    title: "Our Car Fleet | Mehar Motors",
    description: "See all ten cars and ask about rates and availability.",
    type: "website",
    ...(siteUrl ? { url: `${siteUrl}/fleet` } : {})
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Car Fleet | Mehar Motors",
    description: "See all ten cars and ask about rates and availability."
  },
  ...(siteUrl ? { alternates: { canonical: "/fleet" } } : {})
};

const vehicleGroups = [
  { id: "cars", label: "Sedans & coupe", bodyStyles: ["sedan", "coupe"] },
  { id: "suvs", label: "SUVs", bodyStyles: ["suv"] }
];

export default function FleetPage() {
  return (
    <SiteFrame>
      <main id="main">
        <PageHero
          current="Fleet"
          path="/fleet"
          title="Browse"
          emphasis="the fleet."
          intro="See all ten cars below. Message us with your dates to ask about the daily rate and availability."
          vehicle={vehicles[1]}
        />

        <section className="fleet-section fleet-page-section section-shell" aria-labelledby="fleet-title">
          <div className="section-heading" data-reveal>
            <div>
              <h2 id="fleet-title">Choose a car<br /><em>for your trip.</em></h2>
            </div>
            <p className="section-intro">Tell us which car and dates you have in mind. We'll tell you which year and trim are available and share the current rate.</p>
          </div>
          <nav className="fleet-jump-links" aria-label="Jump to a vehicle type" data-reveal>
            {vehicleGroups.map((group) => (
              <a href={`#fleet-${group.id}`} key={group.id}>
                {group.label}<span>{vehicles.filter((vehicle) => vehicle.bodyStyle === group.bodyStyle).length}</span>
              </a>
            ))}
          </nav>
          {vehicleGroups.map((group) => {
            const groupVehicles = vehicles.filter((vehicle) => group.bodyStyles.includes(vehicle.bodyStyle));

            return (
              <section className="vehicle-group" id={`fleet-${group.id}`} key={group.id} aria-labelledby={`fleet-${group.id}-title`}>
                <h3 id={`fleet-${group.id}-title`} className="vehicle-group-title" data-reveal>
                  {group.label}<span>{groupVehicles.length}</span>
                </h3>
                <div className="fleet-grid">
                  {groupVehicles.map((vehicle) => (
                    <VehicleCard vehicle={vehicle} headingLevel={4} key={vehicle.id} />
                  ))}
                </div>
              </section>
            );
          })}
          <p className="image-disclosure" data-reveal>
            Rates shown are editable sample daily rates, not confirmed quotes. Ask us for the current rate and availability for your dates.
          </p>
        </section>
        <ContactSection />
      </main>
    </SiteFrame>
  );
}
