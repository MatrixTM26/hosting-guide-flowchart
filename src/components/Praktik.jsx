import { useState, useCallback } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";
import "../styles/Praktik.css";

const SimulationSteps = [
    {
        Title: "Perencanaan",
        Icon: "fa-solid fa-clipboard-list",
        Description:
            "Tentukan tujuan, audiens, dan fitur utama website yang akan dibuat.",
        Tip: "Gunakan metode SMART Goals untuk menentukan tujuan website yang spesifik dan terukur.",
        SubSteps: [
            { Label: "Definisikan tujuan website", Key: "tujuan" },
            { Label: "Buat daftar target audiens", Key: "audiens" },
            { Label: "Susun sitemap awal", Key: "sitemap" },
            { Label: "Riset kompetitor", Key: "riset" }
        ]
    },
    {
        Title: "Desain Wireframe",
        Icon: "fa-solid fa-pen-ruler",
        Description:
            "Buat sketsa tata letak halaman dan alur navigasi menggunakan tools wireframing.",
        Tip: "Mulai dengan mobile-first design untuk memastikan responsivitas dari awal.",
        SubSteps: [
            { Label: "Sketsa layout utama", Key: "sketsa" },
            { Label: "Rancang hierarki konten", Key: "hierarki" },
            { Label: "Tentukan navigasi", Key: "navigasi" },
            { Label: "Review dengan stakeholder", Key: "review" }
        ]
    },
    {
        Title: "Desain UI/UX",
        Icon: "fa-solid fa-palette",
        Description:
            "Kembangkan desain high-fidelity dengan color palette, tipografi, dan komponen UI yang konsisten.",
        Tip: "Ikuti prinsip desain 60-30-10 untuk kombinasi warna: 60% warna dominan, 30% sekunder, 10% aksen.",
        SubSteps: [
            { Label: "Pilih color palette", Key: "palette" },
            { Label: "Tentukan tipografi", Key: "tipografi" },
            { Label: "Desain komponen UI", Key: "komponen" },
            { Label: "Buat design system", Key: "design-system" }
        ]
    },
    {
        Title: "Setup Environment",
        Icon: "fa-solid fa-gear",
        Description:
            "Siapkan development environment: install tools, setup Git repository, dan konfigurasi project.",
        Tip: "Gunakan VS Code dengan ekstensi ESLint, Prettier, dan GitLens untuk produktivitas maksimal.",
        SubSteps: [
            { Label: "Install VS Code & Node.js", Key: "install" },
            { Label: "Buat repository GitHub", Key: "repo" },
            { Label: "Init project dengan Vite/CRA", Key: "init" },
            { Label: "Setup .gitignore & README", Key: "setup" }
        ]
    },
    {
        Title: "Development Frontend",
        Icon: "fa-solid fa-code",
        Description:
            "Implementasikan desain ke kode menggunakan HTML, CSS, dan JavaScript atau framework pilihan.",
        Tip: "Commit secara berkala dengan pesan yang deskriptif menggunakan conventional commits format.",
        SubSteps: [
            { Label: "Struktur HTML semantik", Key: "html" },
            { Label: "Styling dengan CSS/Tailwind", Key: "css" },
            { Label: "Implementasi JavaScript", Key: "js" },
            { Label: "Responsiveness check", Key: "responsive" }
        ]
    },
    {
        Title: "Testing & QA",
        Icon: "fa-solid fa-flask",
        Description:
            "Uji website di berbagai browser, ukuran layar, dan lakukan performance audit menggunakan Lighthouse.",
        Tip: "Target Lighthouse score minimal 90 untuk Performance, Accessibility, Best Practices, dan SEO.",
        SubSteps: [
            { Label: "Cross-browser testing", Key: "browser" },
            { Label: "Mobile responsiveness", Key: "mobile" },
            { Label: "Lighthouse audit", Key: "lighthouse" },
            { Label: "Fix bugs & issues", Key: "bugfix" }
        ]
    },
    {
        Title: "Deploy ke Vercel",
        Icon: "fa-solid fa-rocket",
        Description:
            "Push kode ke GitHub, connect repository ke Vercel, konfigurasi build settings, dan deploy ke production.",
        Tip: "Selalu test di preview deployment sebelum promote ke production untuk menghindari downtime.",
        SubSteps: [
            { Label: "Push final code ke GitHub", Key: "push" },
            { Label: "Import project di Vercel", Key: "import" },
            { Label: "Konfigurasi build & env vars", Key: "config" },
            { Label: "Deploy ke production!", Key: "deploy" }
        ]
    },
    {
        Title: "Website Online!",
        Icon: "fa-solid fa-globe",
        Description:
            "Website berhasil di-deploy dan online. Setup custom domain, aktifkan analytics, dan pantau performance.",
        Tip: "Submit sitemap.xml ke Google Search Console untuk mempercepat indexing di mesin pencari.",
        SubSteps: [
            { Label: "Setup custom domain", Key: "domain" },
            { Label: "Aktifkan Google Analytics", Key: "analytics" },
            { Label: "Submit ke Search Console", Key: "seo" },
            { Label: "Monitor & maintain", Key: "monitor" }
        ]
    }
];

export default function Praktik() {
    const Header = useScrollReveal({ threshold: 0.1 });
    const [CurrentStep, SetCurrentStep] = useState(0);
    const [CompletedSteps, SetCompletedSteps] = useState([]);
    const [IsFinished, SetIsFinished] = useState(false);

    const TotalSteps = SimulationSteps.length;
    const Progress = Math.round((CompletedSteps.length / TotalSteps) * 100);
    const CurrentData = SimulationSteps[CurrentStep];

    const HandleNext = useCallback(() => {
        if (CurrentStep >= TotalSteps - 1) {
            SetCompletedSteps(Previous => {
                const Updated = [...Previous];
                if (!Updated.includes(CurrentStep)) Updated.push(CurrentStep);
                return Updated;
            });
            SetIsFinished(true);
            return;
        }
        SetCompletedSteps(Previous => {
            const Updated = [...Previous];
            if (!Updated.includes(CurrentStep)) Updated.push(CurrentStep);
            return Updated;
        });
        SetCurrentStep(Previous => Previous + 1);
    }, [CurrentStep, TotalSteps]);

    const HandleReset = useCallback(() => {
        SetCurrentStep(0);
        SetCompletedSteps([]);
        SetIsFinished(false);
    }, []);

    const StatusText = IsFinished
        ? "Selesai!"
        : CompletedSteps.length === 0
          ? "Belum Dimulai"
          : `Step ${CurrentStep + 1} dari ${TotalSteps}`;

    const StatusClass = IsFinished
        ? "done"
        : CompletedSteps.length === 0
          ? "idle"
          : "running";
    const StatusIcon = IsFinished
        ? "fa-solid fa-check"
        : CompletedSteps.length === 0
          ? "fa-regular fa-circle"
          : "fa-solid fa-spinner fa-spin";

    return (
        <section className="section praktik" id="praktik">
            <div
                className="praktik-bg"
                data-parallax="med"
                aria-hidden="true"
            />
            <div
                className="praktik-orb"
                data-parallax="fast"
                aria-hidden="true"
            />
            <div className="container">
                <div
                    className={`reveal${Header.visible ? " visible" : ""}`}
                    ref={Header.ref}
                    style={{ marginBottom: "3rem" }}
                >
                    <p className="section-label">Simulasi Interaktif</p>
                    <h2 className="section-title">Praktik Alur Website</h2>
                    <p className="section-description">
                        Simulasikan proses lengkap pembuatan dan deployment
                        website. Klik tombol untuk melanjutkan ke langkah
                        berikutnya.
                    </p>
                </div>

                <div className="praktik-wrapper">
                    <div className="praktik-main">
                        <div className="praktik-progress-header">
                            <div className="praktik-step-counter">
                                <span>{CompletedSteps.length}</span>/
                                {TotalSteps}
                            </div>
                            <div
                                className="praktik-progress-bar"
                                role="progressbar"
                                aria-valuenow={Progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                            >
                                <div
                                    className="praktik-progress-fill"
                                    style={{ width: `${Progress}%` }}
                                />
                            </div>
                            <div
                                className={`praktik-status-badge ${StatusClass}`}
                            >
                                <i className={StatusIcon} aria-hidden="true" />
                                {StatusText}
                            </div>
                        </div>

                        <div
                            className={`praktik-display-card${CompletedSteps.length > 0 && !IsFinished ? " active" : ""}`}
                        >
                            <div className="praktik-card-header">
                                <div className="praktik-card-dots">
                                    <span className="dot dot-red" />
                                    <span className="dot dot-yellow" />
                                    <span className="dot dot-green" />
                                </div>
                                <div className="praktik-card-title-bar">
                                    <i
                                        className="fa-solid fa-terminal"
                                        aria-hidden="true"
                                    />
                                    webflow-simulator.exe
                                </div>
                            </div>

                            {IsFinished ? (
                                <div className="praktik-finish-screen">
                                    <div className="finish-icon">
                                        <i
                                            className="fa-solid fa-check"
                                            aria-hidden="true"
                                        />
                                    </div>
                                    <h3 className="finish-title">
                                        Website Berhasil Online!
                                    </h3>
                                    <p className="finish-description">
                                        Selamat! Kamu telah menyelesaikan
                                        seluruh alur pembuatan dan deployment
                                        website. Sekarang website kamu sudah
                                        bisa diakses oleh dunia!
                                    </p>
                                    <button
                                        className="btn-primary"
                                        onClick={HandleReset}
                                    >
                                        <i
                                            className="fa-solid fa-rotate-left"
                                            aria-hidden="true"
                                        />
                                        Ulangi Simulasi
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="praktik-card-body">
                                        <div className="praktik-step-visual">
                                            <div className="praktik-step-icon-large">
                                                <i
                                                    className={CurrentData.Icon}
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div className="praktik-step-info">
                                                <span className="praktik-step-number-label">
                                                    Langkah{" "}
                                                    {String(
                                                        CurrentStep + 1
                                                    ).padStart(2, "0")}{" "}
                                                    dari {TotalSteps}
                                                </span>
                                                <h3 className="praktik-step-current-title">
                                                    {CurrentData.Title}
                                                </h3>
                                            </div>
                                        </div>
                                        <p className="praktik-step-current-description">
                                            {CurrentData.Description}
                                        </p>
                                        <div className="praktik-step-substeps">
                                            {CurrentData.SubSteps.map(
                                                (SubStep, SubIndex) => {
                                                    const IsCompleted =
                                                        CompletedSteps.includes(
                                                            CurrentStep
                                                        ) || SubIndex < 2;
                                                    const IsCurrent =
                                                        SubIndex === 2 &&
                                                        !CompletedSteps.includes(
                                                            CurrentStep
                                                        );
                                                    const StatusKey =
                                                        IsCompleted
                                                            ? "completed"
                                                            : IsCurrent
                                                              ? "current"
                                                              : "pending";
                                                    const IconClass =
                                                        IsCompleted
                                                            ? "fa-solid fa-check"
                                                            : IsCurrent
                                                              ? "fa-solid fa-arrow-right"
                                                              : "fa-regular fa-circle";

                                                    return (
                                                        <div
                                                            key={SubStep.Key}
                                                            className={`praktik-substep ${StatusKey}`}
                                                        >
                                                            <i
                                                                className={
                                                                    IconClass
                                                                }
                                                                aria-hidden="true"
                                                            />
                                                            <span>
                                                                {SubStep.Label}
                                                            </span>
                                                        </div>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                    <div className="praktik-card-footer">
                                        <span className="praktik-step-text">
                                            {Progress}% selesai
                                        </span>
                                        <div className="praktik-controls">
                                            <button
                                                className="praktik-btn praktik-btn-reset"
                                                onClick={HandleReset}
                                                disabled={
                                                    CompletedSteps.length === 0
                                                }
                                            >
                                                <i
                                                    className="fa-solid fa-rotate-left"
                                                    aria-hidden="true"
                                                />
                                                Ulangi
                                            </button>
                                            <button
                                                className="praktik-btn praktik-btn-next"
                                                onClick={HandleNext}
                                            >
                                                {CurrentStep >= TotalSteps - 1
                                                    ? "Selesaikan"
                                                    : "Langkah Berikutnya"}
                                                <i
                                                    className={
                                                        CurrentStep >=
                                                        TotalSteps - 1
                                                            ? "fa-solid fa-check"
                                                            : "fa-solid fa-arrow-right"
                                                    }
                                                    aria-hidden="true"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    <div className="praktik-sidebar">
                        <div className="praktik-step-list">
                            <div className="praktik-step-list-header">
                                Progress Langkah
                            </div>
                            {SimulationSteps.map((Step, Index) => {
                                const IsCompleted =
                                    CompletedSteps.includes(Index);
                                const IsCurrent =
                                    Index === CurrentStep && !IsFinished;
                                const StatusClass = IsCompleted
                                    ? "completed"
                                    : IsCurrent
                                      ? "current"
                                      : "";

                                return (
                                    <div
                                        key={Step.Title}
                                        className={`praktik-step-list-item ${StatusClass}`}
                                    >
                                        <div className="list-item-dot">
                                            {IsCompleted ? (
                                                <i
                                                    className="fa-solid fa-check"
                                                    aria-hidden="true"
                                                />
                                            ) : (
                                                Index + 1
                                            )}
                                        </div>
                                        <span>{Step.Title}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {!IsFinished && (
                            <div className="praktik-tip-card">
                                <div className="praktik-tip-label">
                                    <i
                                        className="fa-solid fa-lightbulb"
                                        aria-hidden="true"
                                    />
                                    Tips Langkah Ini
                                </div>
                                <p className="praktik-tip-text">
                                    {CurrentData.Tip}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
