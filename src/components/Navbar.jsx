import { useState, useEffect, useCallback, memo } from "react";
import "../styles/Navbar.css";

const NavItems = [
    { Label: "Home", Href: "#home", Icon: "fa-solid fa-house" },
    {
        Label: "Alur Pembuatan",
        Href: "#alur-pembuatan",
        Icon: "fa-solid fa-diagram-project"
    },
    { Label: "Hosting", Href: "#workflow-hosting", Icon: "fa-solid fa-server" },
    { Label: "Praktik", Href: "#praktik", Icon: "fa-solid fa-laptop-code" },
    { Label: "Tentang", Href: "#tentang", Icon: "fa-solid fa-circle-info" }
];

const SectionIds = [
    "tentang",
    "praktik",
    "workflow-hosting",
    "alur-pembuatan",
    "home"
];

export default function Navbar() {
    const [ActiveHref, SetActiveHref] = useState("#home");
    const [MobileOpen, SetMobileOpen] = useState(false);

    useEffect(() => {
        const OnScroll = () => {
            for (const Id of SectionIds) {
                const Element = document.getElementById(Id);
                if (Element && window.scrollY >= Element.offsetTop - 150) {
                    SetActiveHref(`#${Id}`);
                    break;
                }
            }
        };
        window.addEventListener("scroll", OnScroll, { passive: true });
        return () => window.removeEventListener("scroll", OnScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = MobileOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [MobileOpen]);

    const HandleLink = useCallback(Href => {
        SetActiveHref(Href);
        SetMobileOpen(false);
    }, []);

    const ToggleMenu = useCallback(
        () => SetMobileOpen(Previous => !Previous),
        []
    );

    return (
        <>
            <nav className="desktop-float-dock" aria-label="Navigasi utama">
                <a
                    href="#home"
                    className="fdock-logo"
                    onClick={() => HandleLink("#home")}
                >
                    <span className="fdock-logo-mark">WF</span>
                    <span className="fdock-logo-text">WEBFLOW</span>
                </a>
                <span className="fdock-divider" aria-hidden="true" />
                {NavItems.map(Item => (
                    <a
                        key={Item.Href}
                        href={Item.Href}
                        className={`fdock-item${ActiveHref === Item.Href ? " active" : ""}`}
                        onClick={() => HandleLink(Item.Href)}
                        aria-current={
                            ActiveHref === Item.Href ? "page" : undefined
                        }
                    >
                        <i className={Item.Icon} aria-hidden="true" />
                        {Item.Label}
                    </a>
                ))}
            </nav>

            <button
                className={`nav-mobile-toggle${MobileOpen ? " open" : ""}`}
                onClick={ToggleMenu}
                aria-label={MobileOpen ? "Tutup menu" : "Buka menu"}
                aria-expanded={MobileOpen}
            >
                <span className="hamburger-lines" aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </span>
            </button>

            <div
                className={`mobile-menu-overlay${MobileOpen ? " open" : ""}`}
                onClick={() => SetMobileOpen(false)}
                aria-hidden="true"
            />

            <nav
                className={`mobile-dock${MobileOpen ? " open" : ""}`}
                aria-label="Navigasi mobile"
                aria-hidden={!MobileOpen}
            >
                {NavItems.map(Item => (
                    <a
                        key={Item.Href}
                        href={Item.Href}
                        className={`dock-item${ActiveHref === Item.Href ? " active" : ""}`}
                        onClick={() => HandleLink(Item.Href)}
                        aria-current={
                            ActiveHref === Item.Href ? "page" : undefined
                        }
                    >
                        <i className={Item.Icon} aria-hidden="true" />
                        <span className="dock-label">{Item.Label}</span>
                    </a>
                ))}
            </nav>
        </>
    );
}
