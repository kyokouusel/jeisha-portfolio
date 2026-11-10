import { Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="-translate-y-[1px] bg-white border-t border-primary/10">
            <div className="container">
                <div className="border-x border-primary/10">
                    <section id="contact" aria-labelledby="contact-heading" className="max-w-3xl mx-auto px-4 sm:px-7 py-10 md:py-14">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                            <div className="flex flex-col gap-2">
                                <p className="text-sm tracking-[2px] text-primary uppercase font-medium">Contact</p>
                                <h2 id="contact-heading" className="text-2xl sm:text-3xl">Let&apos;s work together</h2>
                                <p>For project inquiries and collaborations, email me.</p>
                            </div>
                            <a
                                href="mailto:jeishapetancio@gmail.com"
                                className="inline-flex w-fit items-center gap-2 border border-primary/15 px-4 py-3 text-primary transition-colors hover:bg-primary/5"
                            >
                                <Mail size={18} aria-hidden="true" />
                                <span>jeishapetancio@gmail.com</span>
                            </a>
                        </div>
                    </section>
                    <div className="border-t border-primary/10 max-w-3xl mx-auto px-4 sm:px-7 py-4 md:py-6">
                        <p>© 2026 Jeisha Lou P. Petancio</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer