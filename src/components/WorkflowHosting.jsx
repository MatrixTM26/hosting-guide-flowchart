import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/WorkflowHosting.css";

const PlatformData = [
    {
        Icon: "fa-solid fa-triangle",
        Name: "Vercel",
        Description: "Deploy otomatis dari GitHub",
        Recommended: true
    },
    {
        Icon: "fa-solid fa-leaf",
        Name: "Netlify",
        Description: "Static site hosting cepat",
        Recommended: false
    },
    {
        Icon: "fa-brands fa-github",
        Name: "GitHub Pages",
        Description: "Gratis untuk repo publik",
        Recommended: false
    },
    {
        Icon: "fa-solid fa-cloud",
        Name: "Cloudflare Pages",
        Description: "CDN global & gratis",
        Recommended: false
    }
];

const WorkflowStepData = [
    {
        Number: "01",
        Icon: "fa-brands fa-git-alt",
        Title: "Inisiasi Repository Git",
        Description: "Buat repository baru di GitHub dan inisialisasi Git di folder project lokal. Tambahkan .gitignore yang sesuai dengan teknologi yang digunakan.",
        Image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=600&q=70&auto=format",
        Code: "git init && git add . && git commit -m 'first commit'",
        Checklist: [
            "Buat repository di GitHub",
            "Inisialisasi Git lokal",
            "Setup .gitignore",
            "Push initial commit"
        ],
        Active: true
    },
    {
        Number: "02",
        Icon: "fa-solid fa-server",
        Title: "Pilih Platform Hosting",
        Description: "Untuk website statis atau React/Vue/Next.js, Vercel adalah pilihan terbaik karena integrasi GitHub yang sempurna dan deployment otomatis.",
        Image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&q=70&auto=format",
        Code: "npm install -g vercel",
        Checklist: [
            "Evaluasi kebutuhan project",
            "Daftar akun di platform pilihan",
            "Verifikasi akun dengan GitHub",
            "Eksplorasi dashboard platform"
        ],
        Active: true
    },
    {
        Number: "03",
        Icon: "fa-solid fa-globe",
        Title: "Daftarkan Domain",
        Description: "Beli domain di registrar seperti Namecheap, GoDaddy, atau Niagahoster. Pilih TLD yang sesuai (.com, .id, .dev) dan aktifkan WHOIS protection.",
        Image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&q=70&auto=format",
        Code: "whois example.com",
        Checklist: [
            "Cek ketersediaan domain",
            "Beli domain pilihan",
            "Aktifkan WHOIS privacy",
            "Catat nameserver default"
        ],
        Active: true
    },
    {
        Number: "04",
        Icon: "fa-solid fa-network-wired",
        Title: "Konfigurasi DNS",
        Description: "Arahkan domain ke hosting dengan menambahkan DNS record. Untuk Vercel, tambahkan CNAME record atau A record yang mengarah ke server Vercel.",
        Image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=70&auto=format",
        Code: "CNAME www cname.vercel-dns.com",
        Checklist: [
            "Login ke panel domain registrar",
            "Tambahkan A record ke IP hosting",
            "Tambahkan CNAME untuk www",
            "Tunggu propagasi DNS (24-48 jam)"
        ],
        Active: true
    },
    {
        Number: "05",
        Icon: "fa-brands fa-github",
        Title: "Connect Repository ke Hosting",
        Description: "Hubungkan repository GitHub ke platform hosting. Setiap push ke branch main akan otomatis memicu proses build dan deployment baru.",
        Image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=70&auto=format",
        Code: "vercel --prod",
        Checklist: [
            "Import project dari GitHub",
            "Pilih branch untuk production",
            "Set environment variables",
            "Aktifkan auto-deploy"
        ],
        Active: false
    },
    {
        Number: "06",
        Icon: "fa-solid fa-sliders",
        Title: "Konfigurasi Build",
        Description: "Atur build command, output directory, dan environment variables di dashboard hosting. Pastikan framework preset sesuai dengan teknologi yang dipakai.",
        Image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=600&q=70&auto=format",
        Code: "npm run build → dist/",
        Checklist: [
            "Set build command (npm run build)",
            "Set output directory (dist atau build)",
            "Tambahkan environment variables",
            "Test build preview"
        ],
        Active: false
    },
    {
        Number: "07",
        Icon: "fa-solid fa-rocket",
        Title: "Deploy & Go Live!",
        Description: "Lakukan deployment final. Verifikasi SSL certificate aktif, test semua halaman, dan pantau performance lewat Lighthouse atau Google Search Console.",
        Image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=70&auto=format",
        Code: "git push origin main → auto deploy",
        Checklist: [
            "Trigger deployment production",
            "Verifikasi SSL certificate (HTTPS)",
            "Test semua halaman & fitur",
            "Submit sitemap ke Google Search Console"
        ],
        Active: false
    }
];

function WorkflowStep({ Data, Animate, IsLast }) {
    const Reveal = useScrollReveal({ threshold: 0.1 });

    return (
        <div
            className={`workflow-step${Data.Active ? " active" : ""} reveal${Reveal.visible ? " visible" : ""}`}
            ref={Reveal.ref}
        >
            <div className="workflow-step-left">
                <div className="workflow-step-circle">
                    <i className={Data.Icon} aria-hidden="true" />
                </div>
                {!IsLast && <div className="workflow-step-line" />}
            </div>
            <div className="workflow-step-content">
                <div className="workflow-step-header">
                    <div className="workflow-step-meta">
                        <span className="workflow-step-number">Langkah {Data.Number}</span>
                        <h3 className="workflow-step-title">{Data.Title}</h3>
                    </div>
                </div>
                <div className="workflow-step-body">
                    <img
                        src={Data.Image}
                        alt={Data.Title}
                        className="workflow-step-img"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="160"
                    />
                    <div className="workflow-step-inner">
                        <p className="workflow-step-description">{Data.Description}</p>
                        <div className="workflow-code-block">
                            <span className="code-dim">$ </span>{Data.Code}
                        </div>
                        <div className="workflow-checklist">
                            {Data.Checklist.map(Item => (
                                <div key={Item} className="workflow-check-item">
                                    <i className="fa-solid fa-check" aria-hidden="true" />
                                    <span>{Item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function WorkflowHosting() {
    const Header = useScrollReveal({ threshold: 0.1 });
    const Sticky = useScrollReveal({ threshold: 0.05 });

    return (
        <section className="section workflow-hosting" id="workflow-hosting">
            <div className="workflow-bg" data-parallax="slow" aria-hidden="true" />
            <div className="container">
                <div
                    className={`reveal${Header.visible ? " visible" : ""}`}
                    ref={Header.ref}
                >
                    <p className="section-label">Fase 2 — Deployment</p>
                    <h2 className="section-title">Workflow Hosting & Deploy</h2>
                    <p className="section-description">
                        7 langkah untuk membawa website dari lokal ke internet — dari setup repository,
                        pemilihan platform, hingga konfigurasi domain dan CI/CD pipeline.
                    </p>
                </div>

                <div className="workflow-layout">
                    <div
                        className={`workflow-sticky reveal-left${Sticky.visible ? " visible" : ""}`}
                        ref={Sticky.ref}
                    >
                        <div>
                            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)", marginBottom: "10px" }}>
                                Platform Rekomendasi
                            </p>
                            <div className="workflow-platform-cards">
                                {PlatformData.map(Platform => (
                                    <div
                                        key={Platform.Name}
                                        className={`workflow-platform-card${Platform.Recommended ? " recommended" : ""}`}
                                    >
                                        {Platform.Recommended && (
                                            <span className="platform-rec-badge">Terbaik</span>
                                        )}
                                        <div className="platform-icon-wrap">
                                            <i className={Platform.Icon} aria-hidden="true" />
                                        </div>
                                        <div className="platform-info">
                                            <span className="platform-name">{Platform.Name}</span>
                                            <span className="platform-description">{Platform.Description}</span>
                                        </div>
                                        <span className="platform-free-badge">Free</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: "var(--radius)", padding: "1.2rem", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
                            <p style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--text-3)" }}>
                                Stack yang Direkomendasikan
                            </p>
                            {[
                                { Label: "Framework", Value: "React / Next.js", Icon: "fa-brands fa-react" },
                                { Label: "Hosting", Value: "Vercel", Icon: "fa-solid fa-triangle" },
                                { Label: "Domain", Value: "Namecheap", Icon: "fa-solid fa-globe" },
                                { Label: "Version Control", Value: "GitHub", Icon: "fa-brands fa-github" },
                                { Label: "CI/CD", Value: "GitHub Actions", Icon: "fa-solid fa-gears" }
                            ].map(Row => (
                                <div key={Row.Label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.78rem" }}>
                                    <span style={{ color: "var(--text-3)", display: "flex", alignItems: "center", gap: "6px" }}>
                                        <i className={Row.Icon} style={{ color: "var(--accent)", fontSize: "0.7rem" }} aria-hidden="true" />
                                        {Row.Label}
                                    </span>
                                    <span style={{ color: "var(--text-1)", fontWeight: 600 }}>{Row.Value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="workflow-timeline">
                        {WorkflowStepData.map((Data, Index) => (
                            <WorkflowStep
                                key={Data.Number}
                                Data={Data}
                                IsLast={Index === WorkflowStepData.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
