import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "LoveBeat: Nexus — Feel the Beat",
  description: "Enter LoveBeat: Nexus, a high-energy world of rhythm, style, and endless competition.",
  icons: { icon: "/images/logo.png" },
  openGraph: {
    title: "LoveBeat: Nexus — Feel the Beat",
    description: "Your rhythm. Your identity. Enter the Nexus.",
    images: [{ url: "/og.png", width: 1680, height: 945, alt: "LoveBeat Nexus" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LoveBeat: Nexus — Feel the Beat",
    description: "Your rhythm. Your identity. Enter the Nexus.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
