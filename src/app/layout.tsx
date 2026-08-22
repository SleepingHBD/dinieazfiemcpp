import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/cormorant-garamond/600.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/caveat/500.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sleepinghbd.github.io/dinieazfiemcpp/"),
  title: {
    default: "The Communications Observer",
    template: "%s — The Communications Observer",
  },
  description: "An independent editorial journal observing and analysing real-world corporate communication.",
  openGraph: {
    title: "The Communications Observer",
    description: "Observing. Analysing. Communicating.",
    type: "website",
    images: [{ url: "https://sleepinghbd.github.io/dinieazfiemcpp/og.jpg", width: 1200, height: 630, alt: "The Communications Observer editorial masthead" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Communications Observer",
    description: "Observing. Analysing. Communicating.",
    images: ["https://sleepinghbd.github.io/dinieazfiemcpp/og.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
