import { NextResponse } from "next/server";

const experienceData = [
    {
        role: "UI/UX Designer",
        location: "Bukidnon State University",
        startYear: "2021",
        endYear: "2026",
        bulletPoints: [
            "Designed user-friendly and visually appealing interfaces for academic and major projects.",
            "Created and maintained design systems to ensure consistency across different platforms and projects.",
            "Developed wireframes, prototypes, and high-fidelity mockups.",
            "Applied UI/UX principles to improve usability, accessibility, and overall user experience."
        ]
    },
    {
        role: "Freelance Video & Photo Editor",
        location: "Freelance",
        startYear: "2019",
        endYear: "2026",
        bulletPoints: [
            "Provided video and photo editing services to clients through online platforms and freelance opportunities.",
            "Edited videos based on client preferences, project requirements, and creative direction.",
            "Enhanced and retouched photos through color correction, image manipulation, and visual adjustments.",
            "Created engaging video content using transitions, effects, color grading, and audio enhancements."
        ]
    },
]

const educationData = [
    {
        date: "2011–2017",
        title: "Casisang Elementary School",
        subtitle: "With Honors"
    },
    {
        date: "2017–2023",
        title: "Bukidnon National High School",
        subtitle: "Humanities and Social Sciences (2021–2023) · With Honors"
    },
    {
        date: "2026–2027",
        title: "Bachelor of Science in Information Technology",
        subtitle: "Bukidnon State University · 4th-year student"
    }
];

const certifications = [
    {
        title: "CCNA: Switching, Routing, and Wireless Essentials",
        image: "/images/certifications/ccna.jpg",
        issuer: "Cisco Networking Academy · Bukidnon State University",
        date: "12 January 2026",
        description: "Successfully completed the CCNA: Switching, Routing, and Wireless Essentials course through the Cisco Networking Academy program."
    },
    {
        title: "Introduction to AI Literacy and Responsible Use",
        image: "/images/certifications/ai-literacy.jpg",
        issuer: "ACHIEVE Future-Ready Skills · Mapúa University",
        date: "14 September 2026",
        description: "Completed the micro-credentials course on AI literacy and responsible use, aligned with PQF Level 6 descriptors."
    },
    {
        title: "Introduction to Artificial Intelligence",
        image: "/images/certifications/intro-to-ai.jpg",
        issuer: "Simplilearn SkillUp",
        date: "10 November 2026",
        description: "Completed the Introduction to Artificial Intelligence online course. Certificate code: 11015590."
    },
    {
        title: "Website UI/UX Designing using ChatGPT",
        image: "/images/certifications/ui-ux-designing.jpg",
        issuer: "Simplilearn SkillUp",
        date: "10 November 2026",
        description: "Completed the Website UI/UX Designing using ChatGPT online course. Certificate code: 11015316."
    },
    {
        title: "Web Designing Basics",
        image: "/images/certifications/web-designing.jpg",
        issuer: "Simplilearn SkillUp",
        date: "10 November 2026",
        description: "Completed the Web Designing Basics online course. Certificate code: 11015160."
    }
];


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        certifications
    });
};