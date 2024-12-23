import Header from "@/componets/Header";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";
import InteractiveFooter from "@/componets/Footer";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "Pushkar PixArt - Portfolio",
  description: "We do our best to be good. We believe in doing good.",
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
