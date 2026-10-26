import { useEffect, useRef, useState } from "react";

const DefaultOptions = { threshold: 0.12, rootMargin: "0px" };

export function useScrollReveal(Options = DefaultOptions) {
    const Ref = useRef(null);
    const [Visible, SetVisible] = useState(false);

    useEffect(() => {
        const Element = Ref.current;
        if (!Element) return;
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            SetVisible(true);
            return;
        }
        const Observer = new IntersectionObserver(
            ([Entry]) => {
                if (Entry.isIntersecting) {
                    SetVisible(true);
                    Observer.disconnect();
                }
            },
            {
                threshold: Options.threshold ?? 0.12,
                rootMargin: Options.rootMargin ?? "0px"
            }
        );
        Observer.observe(Element);
        return () => Observer.disconnect();
    }, []);

    return { ref: Ref, visible: Visible };
}
