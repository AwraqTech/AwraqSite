"use client";

import React, { useEffect, useState } from "react";

export default function useShowingHeader() {
    const [showHeader, setShowHeader] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                const currentScroll = window.scrollY;

                if (currentScroll > 50) {
                    // Show the header when scrolling down
                    if (currentScroll > lastScroll && !showHeader) {
                        setShowHeader(true);
                    }
                    // Hide the header when scrolling up
                    if (currentScroll < lastScroll && showHeader) {
                        setShowHeader(false);
                    }
                }

                setLastScroll(currentScroll);
            }, 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, [lastScroll, showHeader]);

    return { showHeader };
}
