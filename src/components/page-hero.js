import Image from "next/image";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function PageHero({ current, path, title, emphasis, intro, vehicle }) {
  return (
    <div className="page-hero section-shell" id="top">
      <Breadcrumbs current={current} path={path} />
      <div className="page-hero-layout">
        <div className="page-hero-copy" data-reveal>
          <h1><span>{title}</span><em>{emphasis}</em></h1>
          <p className="page-hero-intro">{intro}</p>
        </div>
        <figure className="page-hero-visual" data-reveal>
          <span className="page-hero-accent" aria-hidden="true" />
          <div className="page-hero-image">
            <Image
              src={vehicle.image}
              alt={vehicle.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 430px) calc(100vw - 64px), (max-width: 880px) calc(100vw - 48px), 50vw"
              quality={75}
            />
          </div>
        </figure>
      </div>
    </div>
  );
}
