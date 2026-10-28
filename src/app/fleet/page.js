import { PageHero } from "@/components/page-hero";
import { ContactSection } from "@/components/contact-section";
import { SiteFrame } from "@/components/site-frame";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles } from "@/data/vehicles";
import { siteUrl } from "@/lib/site";

export const metadata = {
  title: "Our Cars | Mehar Motors",
  description: "See all ten Mehar Motors cars. Ask us for the price and to check if a car is available for your dates.",
  openGraph: {
    title: "Our Cars | Mehar Motors",
    description: "See all ten cars and ask about prices and dates.",
    type: "website",
    ...(siteUrl ? { url: `${siteUrl}/fleet` } : {})
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Cars | Mehar Motors",
    description: "See all ten cars and ask about prices and dates."
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
          current="Cars"
          path="/fleet"
          title="See all"
          emphasis="our cars."
          intro="See all ten cars below. Message us with your dates to ask the price and check if the car you want is available."
          vehicle={vehicles[1]}
        />

        <section className="fleet-section fleet-page-section section-shell" aria-labelledby="fleet-title">
          <div className="section-heading" data-reveal>
            <div>
              <h2 id="fleet-title">Choose a car<br /><em>for your trip.</em></h2>
            </div>
            <p className="section-intro">Tell us which car you want and when. We'll let you know which year and version we have and how much it costs.</p>
          </div>
          <nav className="fleet-jump-links" aria-label="Choose a car type" data-reveal>
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
            Prices are examples and may change. Message us for the current price and to check if the car you want is available.
          </p>
        </section>
        <ContactSection />
      </main>
    </SiteFrame>
  );
}
