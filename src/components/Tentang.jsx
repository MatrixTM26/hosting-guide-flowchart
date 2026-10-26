import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Tentang.css";

const FeatureItems = [
    {
        Icon: "fa-solid fa-diagram-project",
        Title: "Flowchart Visual",
        Description: "Setiap langkah dijelaskan dengan visual yang jelas dan mudah dipahami, cocok untuk pemula maupun developer berpengalaman."
    },
    {
        Icon: "fa-solid fa-laptop-code",
        Title: "Simulasi Interaktif",
        Description: "Praktikkan alur kerja secara langsung dengan simulator step-by-step yang memberikan pengalaman hands-on."
    },
    {
        Icon: "fa-solid fa-code",
        Title: "Contoh Kode Nyata",
        Description: "Setiap langkah dilengkapi dengan perintah dan kode yang bisa langsung digunakan di project sungguhan."
    },
    {
        Icon: "fa-solid fa-mobile-screen",
        Title: "Responsif & Modern",
        Description: "Dibangun dengan teknologi modern dan desain yang optimal di semua ukuran layar dari mobile hingga desktop."
    }
];

const TechTagItems = [
    { Label: "React 18", Icon: "fa-brands fa-react" },
    { Label: "Vite", Icon: "fa-solid fa-bolt" },
    { Label: "CSS3", Icon: "fa-brands fa-css3-alt" },
    { Label: "JavaScript ES2020", Icon: "fa-brands fa-js" },
    { Label: "Font Awesome", Icon: "fa-solid fa-icons" },
    { Label: "Vercel", Icon: "fa-solid fa-triangle" }
];

const PhaseItems = [
    { Name: "Fase 1 — Development", Steps: "8 Langkah", Color: "#22d3ee" },
    { Name: "Fase 2 — Deployment", Steps: "7 Langkah", Color: "#818cf8" },
    { Name: "Simulasi Interaktif", Steps: "8 Steps", Color: "#22c55e" }
];

export default function Tentang() {
    const Left = useScrollReveal({ threshold: 0.1 });
    const Right = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="section tentang" id="tentang">
            <div className="tentang-bg" data-parallax="slow" aria-hidden="true" />
            <div className="container">
                <div style={{ marginBottom: "3.5rem" }}>
                    <p className="section-label">Info Website</p>
                    <h2 className="section-title">Tentang WebFlow</h2>
                </div>

                <div className="tentang-grid">
                    <div
                        className={`tentang-left reveal-left${Left.visible ? " visible" : ""}`}
                        ref={Left.ref}
                    >
                        <p className="tentang-description">
                            <strong style={{ color: "var(--text-1)", fontFamily: "var(--font-display)", fontWeight: 900 }}>WebFlow</strong> adalah panduan visual interaktif yang menjelaskan
                            alur lengkap proses pembuatan dan hosting website secara profesional.
                            Dari tahap perencanaan, desain UI/UX, development, testing, hingga deployment dan go-live.
                        </p>
                        <p className="tentang-description" style={{ marginTop: "-1.5rem" }}>
                            Website ini dirancang sebagai referensi komprehensif yang bisa diikuti oleh
                            siapa saja — dari pelajar, mahasiswa, hingga developer profesional yang
                            ingin memahami workflow pembuatan website secara end-to-end.
                        </p>

                        <div className="tentang-feature-list">
                            {FeatureItems.map(Feature => (
                                <div key={Feature.Title} className="tentang-feature-item">
                                    <div className="tentang-feature-icon">
                                        <i className={Feature.Icon} aria-hidden="true" />
                                    </div>
                                    <div className="tentang-feature-text">
                                        <span className="tentang-feature-title">{Feature.Title}</span>
                                        <span className="tentang-feature-desc">{Feature.Description}</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="tentang-tech-stack">
                            <p className="tentang-tech-label">Dibangun Dengan</p>
                            <div className="tentang-tech-tags">
                                {TechTagItems.map(Tag => (
                                    <span key={Tag.Label} className="tentang-tech-tag">
                                        <i className={Tag.Icon} aria-hidden="true" />
                                        {Tag.Label}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="tentang-footer-cta">
                            <a href="#alur-pembuatan" className="btn-primary">
                                <i className="fa-solid fa-play" aria-hidden="true" />
                                Mulai dari Awal
                            </a>
                            <a href="#praktik" className="btn-ghost">
                                <i className="fa-solid fa-laptop-code" aria-hidden="true" />
                                Langsung Praktik
                            </a>
                        </div>
                    </div>

                    <div
                        className={`tentang-right reveal-right${Right.visible ? " visible" : ""}`}
                        ref={Right.ref}
                    >
                        <div className="tentang-stat-grid">
                            {[
                                { Number: "15", Label: "Total Langkah" },
                                { Number: "2", Label: "Fase Utama" },
                                { Number: "8", Label: "Dev Steps" },
                                { Number: "7", Label: "Deploy Steps" }
                            ].map(Stat => (
                                <div key={Stat.Label} className="tentang-stat-card">
                                    <span className="tentang-stat-number">{Stat.Number}</span>
                                    <span className="tentang-stat-label">{Stat.Label}</span>
                                </div>
                            ))}
                        </div>

                        <div className="tentang-phases-card">
                            <div className="tentang-phases-header">Ringkasan Konten</div>
                            {PhaseItems.map(Phase => (
                                <div key={Phase.Name} className="tentang-phase-row">
                                    <span className="tentang-phase-dot" style={{ background: Phase.Color }} />
                                    <span className="tentang-phase-name">{Phase.Name}</span>
                                    <span className="tentang-phase-steps-count">{Phase.Steps}</span>
                                </div>
                            ))}
                        </div>

                        <div style={{ background: "linear-gradient(135deg, var(--accent-glow) 0%, transparent 100%)", border: "1px solid var(--accent-border)", borderRadius: "var(--radius)", padding: "1.4rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--accent)" }}>
                                <i className="fa-solid fa-star" style={{ marginRight: "6px" }} aria-hidden="true" />
                                Kenapa WebFlow?
                            </p>
                            {[
                                "Panduan end-to-end dari nol",
                                "Langkah konkret yang bisa langsung dipraktikkan",
                                "Visual modern dan mudah dipahami",
                                "Free & open untuk semua",
                                "Selalu diupdate dengan best practices terbaru"
                            ].map(Item => (
                                <div key={Item} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.8rem", color: "var(--text-2)" }}>
                                    <i className="fa-solid fa-check" style={{ color: "var(--accent)", fontSize: "0.7rem", marginTop: "3px", flexShrink: 0 }} aria-hidden="true" />
                                    <span>{Item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
