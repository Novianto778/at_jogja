import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weights: [400, 700],
  variable: "--font-outfit",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weights: [400, 700],
  variable: "--font-playfair-display",
});

export const metadata = {
  title: "atjogja",
  description:
    "atjogja is a travel website that provides curated recommendations and user-friendly features",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${playfairDisplay.variable}`}
    >
      <body className={"font-outfit"}>
        <Toaster />
        <NextTopLoader
          color="#5d9981"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
        />
        {children}
      </body>
    </html>
  );
}
