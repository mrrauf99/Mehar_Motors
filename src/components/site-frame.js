import { Header } from "@/components/header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { generalWhatsAppUrl } from "@/lib/site";

const copyrightYear = new Date().getFullYear();

export function SiteFrame({ children }) {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      {children}
      <footer className="site-footer">
        <div className="footer-inner section-shell">
          <div className="footer-copyright">
            <span>© {copyrightYear} Mehar Motors. All rights reserved.</span>
          </div>
        </div>
      </footer>
      <WhatsAppFloat href={generalWhatsAppUrl} />
      <ScrollReveal />
    </>
  );
}
