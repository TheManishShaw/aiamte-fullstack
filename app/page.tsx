import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import HeroSliders from "@/components/HeroSlider";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home | Aimate ",
  description: "BLog page",
};
export default function Home() {
  return (
    <>
      <ScrollUp />
      <div className="overflow-hidden">
        {/* <Hero /> */}
        <HeroSliders />
      </div>
      <Features />
      <Video />
      {/* <Brands /> */}
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
}
