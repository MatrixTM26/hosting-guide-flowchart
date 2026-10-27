import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/AlurPembuatan.css";

const StepData = [
    {
        Number: "01",
        Icon: "fa-solid fa-clipboard-list",
        Title: "Perencanaan & Riset",
        Description:
            "Tentukan tujuan website, target audiens, dan konten yang dibutuhkan. Riset kompetitor dan buat sitemap awal.",
        Tags: ["Tujuan", "Audiens", "Sitemap"],
        Duration: "1-2 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=400&q=70&auto=format",
        Highlight: false
    },
    {
        Number: "02",
        Icon: "fa-solid fa-pen-ruler",
        Title: "Desain Wireframe",
        Description:
            "Buat sketsa tata letak halaman (low-fidelity). Tentukan hierarki konten, navigasi, dan alur pengguna.",
        Tags: ["Wireframe", "Layout", "User Flow"],
        Duration: "2-3 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=70&auto=format",
        Highlight: false
    },
    {
        Number: "03",
        Icon: "fa-solid fa-palette",
        Title: "Desain UI/UX",
        Description:
            "Kembangkan desain high-fidelity menggunakan Figma atau Adobe XD. Tentukan color palette, tipografi, dan komponen UI.",
        Tags: ["Figma", "Color Palette", "Typography"],
        Duration: "3-5 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=70&auto=format",
        Highlight: true
    },
    {
        Number: "04",
        Icon: "fa-solid fa-gear",
        Title: "Setup Environment",
        Description:
            "Siapkan code editor (VS Code), install Node.js, Git, dan pilih framework. Inisialisasi repository di GitHub.",
        Tags: ["VS Code", "Node.js", "Git"],
        Duration: "0.5 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&q=70&auto=format",
        Highlight: false
    },
    {
        Number: "05",
        Icon: "fa-solid fa-code",
        Title: "Development Frontend",
        Description:
            "Implementasikan desain ke kode menggunakan HTML, CSS, JavaScript, atau framework modern seperti React, Vue, atau Next.js.",
        Tags: ["HTML", "CSS", "React/Vue"],
        Duration: "5-14 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&q=70&auto=format",
        Highlight: true
    },
    {
        Number: "06",
        Icon: "fa-solid fa-database",
        Title: "Development Backend",
        Description:
            "Bangun API, database, dan server-side logic jika dibutuhkan. Gunakan Node.js, Python, atau platform seperti Firebase/Supabase.",
        Tags: ["API", "Database", "Firebase"],
        Duration: "3-10 Hari",
        Required: false,
        Image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70&auto=format",
        Highlight: false
    },
    {
        Number: "07",
        Icon: "fa-solid fa-flask",
        Title: "Testing & QA",
        Description:
            "Uji website di berbagai browser dan ukuran layar. Lakukan performance testing, accessibility audit, dan bug fixing.",
        Tags: ["Cross-browser", "Responsive", "Lighthouse"],
        Duration: "2-4 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=70&auto=format",
        Highlight: false
    },
    {
        Number: "08",
        Icon: "fa-solid fa-rocket",
        Title: "Build & Optimasi",
        Description:
            "Jalankan build production, optimasi gambar, minify CSS/JS, dan pastikan Core Web Vitals memenuhi standar Google.",
        Tags: ["Build", "Minify", "Core Web Vitals"],
        Duration: "1-2 Hari",
        Required: true,
        Image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=70&auto=format",
        Highlight: true
    }
];

function StepCard({ Data, DelayClass }) {
    const Reveal = useScrollReveal({ threshold: 0.08 });

    return (
        <div
            className={`step-card${Data.Highlight ? " highlight" : ""} reveal ${DelayClass}${Reveal.visible ? " visible" : ""}`}
            ref={Reveal.ref}
        >
            <img
                src={Data.Image}
                alt={Data.Title}
                className="step-card-img"
                loading="lazy"
                decoding="async"
                width="400"
                height="140"
            />
            <div className="step-number">
                <span className="step-number-badge">{Data.Number}</span>
            </div>
            <div className="step-icon-wrap">
                <i className={Data.Icon} aria-hidden="true" />
            </div>
            <div className="step-body">
                <h3 className="step-title">{Data.Title}</h3>
                <p className="step-description">{Data.Description}</p>
                <div className="step-tags">
                    {Data.Tags.map(Tag => (
                        <span key={Tag} className="step-tag">
                            {Tag}
                        </span>
                    ))}
                </div>
            </div>
            <div className="step-card-bottom">
                <span className="step-duration">
                    <i className="fa-regular fa-clock" aria-hidden="true" />
                    {Data.Duration}
                </span>
                <span
                    className={`step-required-badge ${Data.Required ? "required" : "optional"}`}
                >
                    {Data.Required ? "Wajib" : "Opsional"}
                </span>
            </div>
        </div>
    );
}

const DelayClasses = [
    "",
    "delay-1",
    "delay-2",
    "delay-3",
    "delay-1",
    "delay-2",
    "delay-3",
    "delay-4"
];

export default function AlurPembuatan() {
    const Header = useScrollReveal({ threshold: 0.1 });

    return (
        <section className="section alur-pembuatan" id="alur-pembuatan">
            <div
                className="alur-pembuatan-bg"
                data-parallax="med"
                aria-hidden="true"
            />
            <div
                className="alur-pembuatan-orb"
                data-parallax="fast"
                aria-hidden="true"
            />
            <div className="container">
                <div
                    className={`alur-header reveal${Header.visible ? " visible" : ""}`}
                    ref={Header.ref}
                >
                    <div className="alur-header-row">
                        <div>
                            <p className="section-label">
                                Fase 1 — Development
                            </p>
                            <h2 className="section-title">
                                Alur Pembuatan Website
                            </h2>
                            <p className="section-description">
                                8 langkah sistematis dari konsep hingga kode
                                siap deploy. Ikuti flowchart ini untuk membangun
                                website yang terstruktur dan profesional.
                            </p>
                        </div>
                        <div className="alur-step-count">
                            <i
                                className="fa-solid fa-diagram-project"
                                aria-hidden="true"
                            />
                            8 Langkah · Fase Development
                        </div>
                    </div>
                </div>

                <div className="flow-grid">
                    {StepData.map((Data, Index) => (
                        <StepCard
                            key={Data.Number}
                            Data={Data}
                            DelayClass={DelayClasses[Index % 4]}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
