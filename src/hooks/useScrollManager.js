import { useEffect } from "react";

const ParallaxSpeeds = { slow: 0.05, med: 0.12, fast: 0.25, reverse: -0.08 };

export function useScrollManager() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let Entries = [];
        let RafId = null;
        let Ticking = false;

        const GetDocumentTop = Element => {
            let Top = 0;
            let Current = Element;
            while (Current) {
                Top += Current.offsetTop;
                Current = Current.offsetParent;
            }
            return Top;
        };

        const Remeasure = () => {
            Entries.forEach(Entry => {
                Entry.SectionTop = GetDocumentTop(Entry.Section);
                Entry.SectionHeight = Entry.Section.offsetHeight;
            });
        };

        const Collect = () => {
            Entries = [];
            for (const [Key, Speed] of Object.entries(ParallaxSpeeds)) {
                document.querySelectorAll(`[data-parallax="${Key}"]`).forEach(Element => {
                    const Section = Element.closest("section") || Element.parentElement;
                    Entries.push({ Element, Speed, Section });
                });
            }
            Remeasure();
        };

        const Apply = () => {
            const ScrollY = window.scrollY;
            const ViewportHalf = window.innerHeight * 0.5;
            for (const { Element, Speed, SectionTop, SectionHeight } of Entries) {
                const Mid = SectionTop + SectionHeight * 0.5;
                const Offset = (Mid - ScrollY - ViewportHalf) * Speed;
                Element.style.transform = `translateY(${Offset.toFixed(2)}px) translateZ(0)`;
            }
            Ticking = false;
        };

        const Loop = () => {
            if (!Ticking) {
                Ticking = true;
                RafId = requestAnimationFrame(Apply);
            }
        };

        let ResizeTimer;
        const OnResize = () => {
            clearTimeout(ResizeTimer);
            ResizeTimer = setTimeout(() => {
                Remeasure();
                Apply();
            }, 120);
        };

        Collect();
        Apply();
        window.addEventListener("scroll", Loop, { passive: true });
        window.addEventListener("resize", OnResize, { passive: true });

        return () => {
            window.removeEventListener("scroll", Loop);
            window.removeEventListener("resize", OnResize);
            cancelAnimationFrame(RafId);
            clearTimeout(ResizeTimer);
        };
    }, []);
}
