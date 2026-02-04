import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Dynamic imports for performance (below the fold)
const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-screen w-full bg-[#f9ecf3]" />,
});
const Gallery = dynamic(() => import("@/components/Gallery"), {
  loading: () => <div className="h-screen w-full bg-[#f9ecf3]" />,
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
      <About />
      <Gallery />

    </main>
  );
}

