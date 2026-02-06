import type { Metadata, Viewport } from "next";
import { Pinyon_Script } from "next/font/google"; // Import the font
import "./globals.css";

// Configure the font
const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon", // Define a CSS variable
  display: "swap",
});

export const metadata: Metadata = {
  title: "AMOR MOTIS",
  description: "Cybercom - AMOR MOTIS",
  keywords: ["art gallery", "online art", "contemporary art", "abstract art", "Dubai art gallery", "buy art online"],
  authors: [{ name: "BOYD Art Gallery" }],
  openGraph: {
    title: "AMOR MOTIS",
    description: "Cybercom - AMOR MOTIS",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#d4af37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`antialiased ${pinyonScript.variable}`}>
        {children}
      </body>
    </html>
  );
}

