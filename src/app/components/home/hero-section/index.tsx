import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Facebook, Github } from "lucide-react";

const HeroSection = () => {
    const socialLinks = [
        {
            href: "https://github.com/kyokouusel",
            label: "GitHub",
            Icon: Github,
        },
        {
            href: "https://www.facebook.com/share/19x47eUFx9/",
            label: "Facebook",
            Icon: Facebook,
        },
    ];
    return (
        <section>
            <div className="container">
                <div className="">
                    <div className="w-full h-72">
                        <Image src={"/images/hero-sec/banner-bg-img.jpg"} alt="Black-and-white skyscrapers viewed from below" width={1080} height={267} className="hero-banner-image w-full h-full object-cover" />
                    </div>
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
                            <div className="absolute top-0 transform -translate-y-1/2">
                                <Image
                                    src="/images/hero-sec/user-img.jpg"
                                    alt="Jeisha Lou P. Petancio"
                                    width={145}
                                    height={145}
                                    className="hero-portrait h-[145px] w-[145px] rounded-full border-4 border-white object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Jeisha Lou P. Petancio</h1>
                                <p className="text-primary font-normal">UX & UI Designer &amp; QA Tester</p>
                                <div className="flex items-center gap-2">
                                    <Image src={"/images/icon/map-icon.svg"} alt="map-icon" width={20} height={20} />
                                    <p className="text-primary">Casisang, Malaybalay City, Bukidnon</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialLinks.map(({ href, label, Icon }) => {
                                        return (
                                            <Link href={href} key={label} aria-label={label} target="_blank" rel="noreferrer" className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full">
                                                <Icon size={18} aria-hidden="true" />
                                            </Link>
                                        )
                                    })}
                                </div>
                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="#contact"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                            <Image
                                                src="/images/icon/spark-icon.svg"
                                                alt="spark-icon"
                                                width={14}
                                                height={14}
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">Get in touch</span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection

