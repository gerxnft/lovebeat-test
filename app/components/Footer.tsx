export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner shell">
        <div className="footer-logos">
          <img src="/mythlogo.svg" alt="Myth Games" />
          <img src="/logo.png" alt="SF"/>
        </div>
        <p className="footer-copyright">© 2023–{new Date().getFullYear()} Myth Games, Inc., LoveBeat: Nexus.</p>
        <p className="footer-disclaimer">
          LoveBeat: Nexus is a fan-made revival project and is not affiliated with or endorsed by CRAZYDIAMOND CO., LTD. or any original rights holders. All original trademarks and game content belong to their respective owners.
        </p>
        <nav className="footer-legal-primary" aria-label="Primary legal links">
          <a href="/privacy">PRIVACY NOTICE</a>
          <a href="/terms">TERMS OF SERVICE</a>
          <a href="/topup-terms">TOP-UP TERMS</a>
        </nav>
        <nav className="footer-legal-secondary" aria-label="Additional legal links">
          <a href="/eula">EULA</a>
          <a href="/security">ANTI-CHEAT</a>
          <a href="/guidelines">GUIDELINES</a>
          <a href="/dmca">DMCA</a>
        </nav>
      </div>
    </footer>
  );
}
