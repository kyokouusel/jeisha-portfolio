import { NextResponse } from "next/server";

const featureWork: {
    title: string;
    description: string;
    roles: string[];
    type: "image" | "video";
    src: string;
}[] = [
    {
        title: "Figma Prototype 01",
        description: "Learning platform screens and dashboard interface.",
        roles: ["Figma Prototyping"],
        type: "image",
        src: "/images/feature-work/figma-img-1.jfif"
    },
    {
        title: "Figma Prototype 02",
        description: "Hotel booking experience across guest and management screens.",
        roles: ["Figma Prototyping"],
        type: "image",
        src: "/images/feature-work/figma-img-2.jfif"
    },
    {
        title: "Photo Editing 01",
        description: "Portrait retouching and visual composition.",
        roles: ["Photo Editing"],
        type: "image",
        src: "/images/feature-work/feature-img-1.jfif"
    },
    {
        title: "Photo Editing 02",
        description: "Poster editing and graphic composition.",
        roles: ["Photo Editing"],
        type: "image",
        src: "/images/feature-work/feature-img-2.jfif"
    },
    {
        title: "Video Editing 01",
        description: "Edited video sample.",
        roles: ["Video Editing"],
        type: "video",
        src: "/images/feature-work/video-1.mp4"
    },
    {
        title: "Video Editing 02",
        description: "Edited video sample.",
        roles: ["Video Editing"],
        type: "video",
        src: "/images/feature-work/video-2.mp4"
    }
];

export const GET = async () => {
    return NextResponse.json({
        featureWork
    });
};