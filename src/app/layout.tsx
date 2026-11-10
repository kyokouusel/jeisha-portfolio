import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./components/layout/footer";
import ScrollReveal from "./components/layout/scroll-reveal";

const inter = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jeisha's Portfolio",
  description: "Portfolio of Jeisha Lou P. Petancio, UX/UI Designer, QA Tester, and photo and video editor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
        <ScrollReveal />
        <Footer/>
      </body>
    </html>
  );
}
