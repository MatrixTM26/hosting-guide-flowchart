import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-inner">
                    <div className="footer-brand">
                        <span className="footer-logo-mark">WF</span>
                        <span className="footer-brand-name">WEBFLOW</span>
                    </div>
                    <p className="footer-copy">
                        Panduan Alur Pembuatan & Hosting Website — {new Date().getFullYear()}
                    </p>
                    <div className="footer-links">
                        <a href="#home" className="footer-link">Home</a>
                        <a href="#alur-pembuatan" className="footer-link">Alur</a>
                        <a href="#workflow-hosting" className="footer-link">Hosting</a>
                        <a href="#praktik" className="footer-link">Praktik</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
