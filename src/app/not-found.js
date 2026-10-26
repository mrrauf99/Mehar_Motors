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
        <p>Head to the fleet to browse the cars.</p>
        <Link className="button button-primary" href="/fleet">Browse the fleet <ArrowIcon /></Link>
      </main>
      <ContactSection />
    </SiteFrame>
  );
}
