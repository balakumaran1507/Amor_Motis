import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for performance (below the fold)
// Dynamic imports for performance (below the fold)
const Presence = dynamic(() => import("@/components/Presence"), {
  loading: () => <div className="h-screen w-full bg-[#f9ecf3]" />,
});
const RegistrationTimer = dynamic(() => import("@/components/RegistrationTimer"), {
  loading: () => <div className="h-screen w-full bg-[#f9ecf3]" />,
});

const Stages = dynamic(() => import("@/components/Stages"), {
  loading: () => <div className="h-screen w-full bg-[#f9ecf3]" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-64 w-full bg-[#f9ecf3]" />,
});

export const metadata = {
  title: "AMOR MOTIS",
  description: "Cybercom - AMOR MOTIS",
  keywords: "Cybercom - AMOR MOTIS",
  authors: [{ name: "BOYD Art Gallery" }],
  openGraph: {
    title: "AMOR MOTIS",
    description: "Cybercom - AMOR MOTIS",
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Presence />
      <RegistrationTimer />

      <Stages />
      <Footer />
    </main>
  );
}

