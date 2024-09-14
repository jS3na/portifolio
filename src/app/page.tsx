import About from "@/components/About";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Projects />
      <Services />
      <About />
    </>
  );
}
