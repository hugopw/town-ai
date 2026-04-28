import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { getPlace } from "@/lib/place";

export function generateMetadata(): Metadata {
  const place = getPlace();
  const tagline = `${place.wordmark} - The UK's most AI-fluent ${place.council.type === "county" ? "county" : place.council.type === "district" ? "district" : "town"}`;
  return {
    title: {
      default: tagline,
      template: `%s · ${place.wordmark}`,
    },
    description: `A vision for ${place.name}: a whole ${place.council.type === "county" ? "county" : place.council.type === "district" ? "district" : "town"} fluent in AI, using it together to protect livelihoods and solve community problems. Developed by Hugo Pickford-Wardle - AI Optimist.`,
    openGraph: {
      title: tagline,
      description: `A vision document for ${place.council.name}. Developed by Hugo Pickford-Wardle - AI Optimist.`,
      url: `https://${place.domainHint}`,
      siteName: place.wordmark,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`:root { --font-sans: 'Inter', ui-sans-serif, system-ui; --font-display: 'Fraunces', ui-serif, Georgia; }`}</style>
      </head>
      <body className="font-sans">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
