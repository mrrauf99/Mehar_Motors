import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { CurrentYear } from "@/components/current-year";
import { generalWhatsAppUrl } from "@/lib/site";
import Link from "next/link";

const copyrightYear = new Date().getFullYear();

export function SiteFrame({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      {children}
      <footer className="site-footer">
        <p className="footer-wordmark section-shell">Mehar Motors</p>
        <div className="footer-inner section-shell">
          <nav className="footer-links" aria-label="Footer navigation">
            <Link href="/fleet">The fleet</Link>
            <Link href="/services">Before you book</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
          <div className="footer-copyright">
            <span>© <CurrentYear initialYear={copyrightYear} /> Mehar Motors. All rights reserved.</span>
          </div>
        </div>
      </footer>
      <WhatsAppFloat href={generalWhatsAppUrl} />
      <ScrollReveal />
    </>
  );
}
