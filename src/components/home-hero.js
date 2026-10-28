import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { generalWhatsAppUrl } from "@/lib/site";

export function HomeHero() {
  return (
    <section className="hero section-shell" id="top" aria-labelledby="hero-title">
      <div className="hero-copy">
        <h1 id="hero-title"><span>Find a car for</span><em>your next trip.</em></h1>
        <p className="hero-description">
          Choose from ten cars, from sedans to SUVs. Tell us which one you need and when. We'll confirm the price and whether it's available.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/fleet">See our cars <ArrowIcon /></Link>
          {generalWhatsAppUrl && (
            <a className="button button-secondary" href={generalWhatsAppUrl} target="_blank" rel="noopener noreferrer">
              Message us on WhatsApp <ArrowIcon />
            </a>
          )}
        </div>
      </div>

      <figure className="hero-visual">
        <span className="hero-shape hero-shape-coral" aria-hidden="true" />
        <span className="hero-shape hero-shape-burgundy" aria-hidden="true" />
        <div className="hero-image-frame">
          <Image
            src="/images/mercedes-s-class.webp"
            alt="Mercedes-Benz S-Class sedan"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(max-width: 700px) 70vw, (max-width: 1100px) 54vw, 52vw"
            quality={75}
          />
        </div>
        <figcaption><span>Mercedes-Benz S-Class</span></figcaption>
      </figure>
      <a className="hero-scroll" href="#fleet"><span><ArrowIcon direction="down" /></span> See the cars</a>
    </section>
  );
}
