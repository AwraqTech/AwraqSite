"use client";

import { useEffect, useState } from "react";

export default function useShowingHeader() {
    const [showHeader, setShowHeader] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;

            if (currentScroll < 50) {
                setShowHeader(false);
            } else {
                if (currentScroll > lastScroll && !showHeader) {
                    setShowHeader(true);
                }
                if (currentScroll < lastScroll && showHeader) {
                    setShowHeader(false);
                }
            }

            setLastScroll(currentScroll);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScroll, showHeader]);

    return { showHeader };
}
