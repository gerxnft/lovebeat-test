import type { ReactNode } from "react";
import Footer from "../components/Footer";

export default function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <div className="legal-shell">
      <header className="legal-header">
        <a href="/" aria-label="Return to LoveBeat Nexus home">
          <img src="/images/logo.png" alt="LoveBeat Nexus" />
        </a>
        <a href="/">← BACK TO HOME</a>
      </header>
      <div className="legal-content">{children}</div>
      <Footer />
    </div>
  );
}
