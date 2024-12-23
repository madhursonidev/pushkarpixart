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
  authors: [{ name: "Pushkar PixArt", url: "https://www.pushkarpixart.com" }],
  openGraph: {
    title: "Pushkar PixArt | Professional Photography & Cinematography",
    description:
      "Pushkar PixArt captures stunning visuals for weddings, corporate events, and creative projects with unparalleled precision and creativity.",
    url: "https://www.pushkarpixart.com",
    siteName: "Pushkar PixArt",
    images: [
      {
        url: "https://www.pushkarpixart.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pushkar PixArt - Professional Photography & Cinematography",
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
    images: ["https://www.pushkarpixart.com/twitter-image.jpg"],
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
    canonical: "https://www.pushkarpixart.com",
  },
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
