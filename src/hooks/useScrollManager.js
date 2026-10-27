import { useEffect } from "react";

const ParallaxSpeeds = {
    slow: 0.18,
    med: 0.35,
    fast: 0.55,
    reverse: -0.22,
    deep: 0.7,
    ultra: 0.9
};

const ZoomRange = { min: 0.88, max: 1.12 };

export function useScrollManager() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches)
            return;

        let TranslateEntries = [];
        let ZoomEntries = [];
        let RafId = null;
        let CurrentScrollY = window.scrollY;
        let TargetScrollY = window.scrollY;

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
            TranslateEntries.forEach(Entry => {
                Entry.SectionTop = GetDocumentTop(Entry.Section);
                Entry.SectionHeight = Entry.Section.offsetHeight;
            });
            ZoomEntries.forEach(Entry => {
                Entry.SectionTop = GetDocumentTop(Entry.Section);
                Entry.SectionHeight = Entry.Section.offsetHeight;
            });
        };

        const Collect = () => {
            TranslateEntries = [];
            ZoomEntries = [];

            for (const [Key, Speed] of Object.entries(ParallaxSpeeds)) {
                document
                    .querySelectorAll(`[data-parallax="${Key}"]`)
                    .forEach(Element => {
                        const Section =
                            Element.closest("section") || Element.parentElement;
                        TranslateEntries.push({
                            Element,
                            Speed,
                            Section,
                            SectionTop: 0,
                            SectionHeight: 0
                        });
                    });
            }

            document
                .querySelectorAll("[data-parallax-zoom]")
                .forEach(Element => {
                    const Section =
                        Element.closest("section") || Element.parentElement;
                    const Strength =
                        parseFloat(
                            Element.getAttribute("data-parallax-zoom")
                        ) || 0.12;
                    ZoomEntries.push({
                        Element,
                        Strength,
                        Section,
                        SectionTop: 0,
                        SectionHeight: 0
                    });
                });

            Remeasure();
        };

        const Apply = () => {
            CurrentScrollY += (TargetScrollY - CurrentScrollY) * 0.072;

            const ViewportHalf = window.innerHeight * 0.5;

            for (const {
                Element,
                Speed,
                SectionTop,
                SectionHeight
            } of TranslateEntries) {
                const Mid = SectionTop + SectionHeight * 0.5;
                const Offset = (Mid - CurrentScrollY - ViewportHalf) * Speed;
                Element.style.transform = `translateY(${Offset.toFixed(3)}px) translateZ(0)`;
            }

            for (const {
                Element,
                Strength,
                SectionTop,
                SectionHeight
            } of ZoomEntries) {
                const Mid = SectionTop + SectionHeight * 0.5;
                const Progress =
                    (CurrentScrollY + ViewportHalf - Mid) /
                    (SectionHeight * 0.8);
                const Clamped = Math.max(-1, Math.min(1, Progress));
                const Scale = 1 + Clamped * Strength * -1;
                const FinalScale = Math.max(
                    ZoomRange.min,
                    Math.min(ZoomRange.max, Scale)
                );
                Element.style.transform = `scale(${FinalScale.toFixed(4)}) translateZ(0)`;
            }

            RafId = requestAnimationFrame(Apply);
        };

        const OnScroll = () => {
            TargetScrollY = window.scrollY;
        };

        let ResizeTimer;
        const OnResize = () => {
            clearTimeout(ResizeTimer);
            ResizeTimer = setTimeout(() => {
                Remeasure();
            }, 120);
        };

        Collect();
        RafId = requestAnimationFrame(Apply);
        window.addEventListener("scroll", OnScroll, { passive: true });
        window.addEventListener("resize", OnResize, { passive: true });

        const MutationObserver = window.MutationObserver;
        const Observer = new MutationObserver(() => {
            Collect();
        });
        Observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("scroll", OnScroll);
            window.removeEventListener("resize", OnResize);
            cancelAnimationFrame(RafId);
            clearTimeout(ResizeTimer);
            Observer.disconnect();
        };
    }, []);
}
