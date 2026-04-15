import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const siteUrl = "https://balafon.africadigitalconnect.net";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BALAFON - Observabilité et gestion IT",
    template: "%s | BALAFON",
  },
  description:
    "BALAFON est une solution digitale professionnelle pour superviser, sécuriser et optimiser vos systèmes informatiques. Demandez une démo.",
  applicationName: "BALAFON",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  keywords: [
    "BALAFON",
    "observabilité",
    "monitoring",
    "gestion IT",
    "MSP",
    "supervision",
    "sécurité",
    "alertes",
    "Africa Digital Connect",
    "Côte d'Ivoire",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "BALAFON",
    title: "BALAFON - Observabilité et gestion IT",
    description:
      "Supervisez, sécurisez et optimisez vos systèmes informatiques avec BALAFON, la plateforme MSP d'Africa Digital Connect.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "BALAFON - Observabilité et gestion IT",
    description:
      "Supervisez, sécurisez et optimisez vos systèmes informatiques avec BALAFON.",
  },
};

// JSON-LD structured data for Organization - all content is static/trusted
const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BALAFON",
  description:
    "Plateforme d'observabilité et de gestion IT pour superviser, sécuriser et optimiser les systèmes informatiques.",
  url: siteUrl,
  logo: `${siteUrl}/images/balafon-logo2.svg`,
  parentOrganization: {
    "@type": "Organization",
    name: "Africa Digital Connect",
    url: "https://www.africadigitalconnect.net",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Cocody, II Plateaux, Rue J47",
    postalCode: "01 BP 13551",
    addressLocality: "Abidjan",
    addressCountry: "CI",
  },
  telephone: "+2250556225555",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth" data-scroll-behavior="smooth">
      <head>
        {/* Safe: all values are hardcoded string literals, no user input */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
        />
      </head>
      <body
        className={`${jakarta.variable} ${jetbrains.variable} min-h-screen antialiased`}
      >
        <a
          href="#main-content"
          className="fixed left-2 top-2 z-[100] -translate-y-16 rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-0"
        >
          Aller au contenu principal
        </a>
        {children}
      </body>
    </html>
  );
}
