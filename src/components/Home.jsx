import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Home.css";

const FloatingStepItems = [
    { Label: "Perencanaan", Status: "done" },
    { Label: "Desain UI/UX", Status: "done" },
    { Label: "Development", Status: "current" },
    { Label: "Deployment", Status: "pending" }
];

export default function Home() {
    const Left = useScrollReveal({ threshold: 0.01 });
    const Right = useScrollReveal({ threshold: 0.01 });

    return (
        <section className="home" id="home">
            <div className="home-parallax-bg" data-parallax="med" aria-hidden="true" />
            <div className="home-grid" data-parallax="slow" aria-hidden="true" />
            <div className="home-orb-left" data-parallax="fast" aria-hidden="true" />
            <div className="home-orb-right" data-parallax="reverse" aria-hidden="true" />
            <div className="home-noise" aria-hidden="true" />

            <div className="container">
                <div className="home-inner">
                    <div
                        className={`home-left reveal-left${Left.visible ? " visible" : ""}`}
                        ref={Left.ref}
                    >
                        <h1 className="home-headline">
                            WEB<span className="headline-accent">FLOW</span>
                        </h1>
                        <p className="home-sub-headline">DARI IDE KE ONLINE</p>

                        <p className="home-description">
                            Panduan step-by-step lengkap untuk membuat, mengembangkan, dan
                            meng-hosting website dari nol hingga siap online — mulai dari
                            perencanaan, development, hingga deployment profesional.
                        </p>

                        <div className="home-cta">
                            <a href="#alur-pembuatan" className="btn-primary">
                                <i className="fa-solid fa-play" aria-hidden="true" />
                                Mulai Belajar
                            </a>
                            <a href="#praktik" className="btn-ghost">
                                <i className="fa-solid fa-laptop-code" aria-hidden="true" />
                                Coba Praktik
                            </a>
                        </div>

                        <div className="home-stats">
                            <div className="home-stat">
                                <span className="home-stat-number">15</span>
                                <span className="home-stat-label">Langkah Total</span>
                            </div>
                            <div className="home-stat">
                                <span className="home-stat-number">2</span>
                                <span className="home-stat-label">Fase Utama</span>
                            </div>
                            <div className="home-stat">
                                <span className="home-stat-number">100%</span>
                                <span className="home-stat-label">Free & Open</span>
                            </div>
                        </div>
                    </div>

                    <div
                        className={`home-right reveal-right${Right.visible ? " visible" : ""}`}
                        ref={Right.ref}
                    >
                        <div className="home-visual">
                            <span className="home-floating-badge">15 Steps</span>

                            <div className="home-visual-card" data-parallax="reverse" data-parallax-zoom="0.08">
                                <div className="home-visual-card-header">
                                    <span className="dot dot-red" />
                                    <span className="dot dot-yellow" />
                                    <span className="dot dot-green" />
                                    <span className="home-visual-card-title">webflow-project</span>
                                </div>
                                <img
                                    src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600&q=80&auto=format"
                                    alt="Website development workspace"
                                    className="home-visual-card-img"
                                    width="600"
                                    height="220"
                                    decoding="async"
                                    fetchpriority="high"
                                />
                                <div className="home-visual-card-overlay">
                                    <div className="home-visual-card-text">
                                        <span className="home-visual-card-steps">Step by Step</span>
                                        <span className="home-visual-card-name">Alur Pembuatan Website</span>
                                    </div>
                                </div>
                            </div>

                            <div className="home-floating-steps">
                                {FloatingStepItems.map(Item => (
                                    <div key={Item.Label} className="floating-step-row">
                                        <span className={`floating-step-dot ${Item.Status}`} />
                                        <span>{Item.Label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
