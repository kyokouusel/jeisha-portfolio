"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";

type FeatureWorkItem = {
    title: string;
    description: string;
    roles: string[];
    type: "image" | "video";
    src: string;
};

const FeaturedWork = () => {
    const [featureWork, setFeatureWork] = useState<FeatureWorkItem[]>([]);
    const [showAll, setShowAll] = useState(false);
    const [previewSrc, setPreviewSrc] = useState<string | null>(null);

    useEffect(() => {
        if (!previewSrc) return;
        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") setPreviewSrc(null);
        };
        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, [previewSrc]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/featured-work')
                if (!res.ok) throw new Error('Failed to fetch')
                const data = await res.json()
                setFeatureWork(data?.featureWork)
            } catch (error) {
                console.error('Error fetching services:', error)
            }
        }

        fetchData()
    }, [])

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
                        <div className="flex flex-row items-center justify-between gap-5">
                            <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Featured work</p>
                            {featureWork.length > 2 && (
                                <button type="button" onClick={() => setShowAll((current) => !current)} className="text-sm font-medium text-primary underline underline-offset-4 hover:text-secondary" aria-expanded={showAll}>
                                    {showAll ? "Show less" : "See all"}
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {featureWork.length ? (showAll ? featureWork : featureWork.slice(0, 2)).map((value, index) => {
                            const isRightCol = index % 2 === 1;

                            return (
                                <div
                                    key={index}
                                    className={`featured-work-item group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? 'md:border-l md:border-primary/10' : ''}`}
                                >
                                    <div
                                        className="overflow-hidden aspect-[1.63/1] bg-primary/5"
                                        onMouseEnter={(event) => {
                                            if (value?.type === "video") void event.currentTarget.querySelector("video")?.play();
                                        }}
                                        onMouseLeave={(event) => {
                                            const video = event.currentTarget.querySelector("video");
                                            if (video) {
                                                video.pause();
                                                video.currentTime = Math.min(0.5, video.duration / 2 || 0.5);
                                            }
                                        }}
                                        onFocus={(event) => {
                                            if (value?.type === "video") void event.currentTarget.querySelector("video")?.play();
                                        }}
                                        onBlur={(event) => {
                                            const video = event.currentTarget.querySelector("video");
                                            if (video) {
                                                video.pause();
                                                video.currentTime = Math.min(0.5, video.duration / 2 || 0.5);
                                            }
                                        }}
                                        tabIndex={value?.type === "video" ? 0 : undefined}
                                    >
                                        {value?.type === "video" ? (
                                            <video
                                                src={value.src}
                                                muted
                                                loop
                                                playsInline
                                                preload="auto"
                                                onLoadedData={(event) => {
                                                    const video = event.currentTarget;
                                                    if (video.currentTime === 0 && video.duration > 0) {
                                                        video.currentTime = Math.min(0.5, video.duration / 2);
                                                    }
                                                }}
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <button type="button" onClick={() => setPreviewSrc(value.src)} aria-label={`Preview ${value.title}`} className="block h-full w-full cursor-zoom-in">
                                                <img src={value.src} alt={value.title} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                            </button>
                                        )}
                                    </div>
                                    <div className="flex flex-col gap-1 sm:gap-2 px-2">
                                        <h4>{value.title}</h4>
                                        <p>{value.description}</p>
                                        <div className="flex">
                                            <p>{value.roles.join(", ")}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        }) : (
                            <p className="px-6 py-10 text-center md:col-span-2">Featured work will appear here.</p>
                        )}
                    </div>

                </div>
            </div>
            {previewSrc && (
                <div role="dialog" aria-modal="true" aria-label="Image preview" className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4" onClick={() => setPreviewSrc(null)}>
                    <button type="button" aria-label="Close image preview" onClick={() => setPreviewSrc(null)} className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center border border-white/30 text-white hover:bg-white/10">
                        <X size={22} />
                    </button>
                    <img src={previewSrc} alt="Expanded featured work" className="max-h-[90vh] max-w-[94vw] object-contain" onClick={(event) => event.stopPropagation()} />
                </div>
            )}
        </section>
    )
}

export default FeaturedWork