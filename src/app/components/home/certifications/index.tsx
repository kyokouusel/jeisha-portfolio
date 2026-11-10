"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

type Certification = {
    title: string;
    image: string;
    issuer: string;
    date: string;
    description: string;
};

const Certifications = () => {
    const [certifications, setCertifications] = useState<Certification[]>([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/page-data");
                if (!response.ok) throw new Error("Failed to fetch certifications");
                const data = await response.json();
                setCertifications(data?.certifications ?? []);
            } catch (error) {
                console.error("Error fetching certifications:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <div className="container">
                <div className="border-x border-primary/10">
                    <div className="flex max-w-3xl mx-auto items-center justify-between px-4 sm:px-7 py-10">
                        <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Certifications</p>
                        {certifications.length > 0 && (
                            <button type="button" onClick={() => setShowAll((current) => !current)} className="text-sm font-medium text-primary underline underline-offset-4 hover:text-secondary" aria-expanded={showAll}>
                                {showAll ? "Show less" : "See all"}
                            </button>
                        )}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 border-t border-primary/10">
                        {(showAll ? certifications : certifications.slice(0, 2)).map((certificate, index) => (
                            <article key={certificate.title} className={`flex flex-col gap-3.5 p-3.5 sm:gap-5 sm:p-6 ${index % 2 === 1 ? "md:border-l md:border-primary/10" : ""}`}>
                                <div className="relative aspect-[1.63/1] overflow-hidden border-[6px] border-[#e9edf4] bg-white">
                                    <Image
                                        src={certificate.image}
                                        alt={`${certificate.title} certificate`}
                                        fill
                                        sizes="(min-width: 768px) 50vw, 100vw"
                                        className="object-contain"
                                    />
                                </div>
                                <div className="flex flex-col gap-2 px-1 pt-4">
                                    <h4>{certificate.title}</h4>
                                    <p>{certificate.description}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;