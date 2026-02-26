import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BALAFON — Observabilité & gestion IT",
  description:
    "BALAFON est une solution digitale professionnelle pour superviser, sécuriser et optimiser vos systèmes informatiques. Demandez une démo.",
  applicationName: "BALAFON",
  keywords: [
    "BALAFON",
    "observabilité",
    "monitoring",
    "gestion IT",
    "sécurité",
    "alertes",
    "Africa Digital Connect",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
