"use client";
import { useEffect } from "react";

const ScrollReveal = () => {
    useEffect(() => {
        const sections = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
        const root = document.documentElement;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
            sections.forEach((section) => {
                section.dataset.scrollReveal = "visible";
            });
            return;
        }

        root.classList.add("scroll-motion-ready");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                (entry.target as HTMLElement).dataset.scrollReveal = "visible";
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

        sections.forEach((section, index) => {
            section.dataset.scrollReveal = "pending";
            section.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
            root.classList.remove("scroll-motion-ready");
        };
    }, []);

    return null;
};

export default ScrollReveal;