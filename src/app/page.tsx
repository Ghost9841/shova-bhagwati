import About from "@/components/About";
import Hero from "@/components/HeroSection";
import ProcessSection from "@/components/Process";
import ProductSection from "@/components/Product";
import Services from "@/components/Services";
import Team from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <About/>
      <ProcessSection/>
      <ProductSection/>
      <Services/>
      <Team/>
      <Testimonials/>
    </div>
  );
}
