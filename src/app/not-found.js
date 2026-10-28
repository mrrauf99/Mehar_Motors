import Link from "next/link";
import { ArrowIcon } from "@/components/arrow-icon";
import { ContactSection } from "@/components/contact-section";
import { SiteFrame } from "@/components/site-frame";

export const metadata = {
  title: "Page not found | Mehar Motors",
  robots: { index: false, follow: true }
};

export default function NotFound() {
  return (
    <SiteFrame>
      <main id="main" className="not-found section-shell">
        <h1>We can’t find that page.</h1>
        <p>See our cars and choose one for your trip.</p>
        <Link className="button button-primary" href="/fleet">See our cars <ArrowIcon /></Link>
      </main>
      <ContactSection />
    </SiteFrame>
  );
}
