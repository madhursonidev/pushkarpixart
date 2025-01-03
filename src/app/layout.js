import Header from "@/componets/Header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import InteractiveFooter from "@/componets/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Pushkar PixArt | Professional Photography & Cinematography",
  description:
    "Pushkar PixArt is a premier production house in India, delivering exceptional photography and cinematography services for weddings, corporate events, documentaries, and more.",
  keywords: [
    "Photography",
    "Cinematography",
    "Wedding Photography",
    "Corporate Videos",
    "Documentaries",
    "Production House",
    "Pushkar PixArt",
    "Event Coverage",
    "India",
  ],
  authors: [
    { name: "Pushkar PixArt", url: "https://pushkarpixart.vercel.app" },
  ],
  openGraph: {
    title: "Pushkar PixArt - Professional Photography & Cinematography",
    description:
      "Pushkar PixArt captures stunning visuals for weddings, corporate events, and creative projects with unparalleled precision and creativity.",
    url: "https://pushkarpixart.vercel.app",
    type: "website",
    siteName: "Pushkar PixArt",
    images: [
      {
        url: "https://pushkarpixart.vercel.app/og-image.jpg",
        alt: "Pushkar PixArt - Crafting Stories Through Lenses",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pushkar PixArt | Professional Photography & Cinematography",
    description:
      "Explore Pushkar PixArt, a leading production house specializing in photography and cinematography services for weddings, corporate events, and documentaries.",
    images: ["https://pushkarpixart.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://pushkarpixart.vercel.app",
    languages: {
      "en-US": "https://pushkarpixart.vercel.app",
    },
  },
  category: "Photography, Cinematography, Production Services",
  applicationName: "Pushkar PixArt",
  generator: "Next.js",
  publisher: "Pushkar PixArt",
  metadataBase: new URL("https://pushkarpixart.vercel.app"),
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <Header />
        {children}
        <InteractiveFooter />
      </body>
    </html>
  );
}
