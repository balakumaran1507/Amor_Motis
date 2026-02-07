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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  openGraph: {
    title: "AMOR MOTIS",
    description: "Cybercom - AMOR MOTIS",
    type: "website",
    locale: "en_US",
  },
  manifest: "/site.webmanifest",
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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased ${pinyonScript.variable}`}>
        {children}
      </body>
    </html>
  );
}

