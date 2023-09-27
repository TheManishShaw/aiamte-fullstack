import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Team } from "@/components/About/TeamSection";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { getTeams } from "@/sanity/actions";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "About | Aimate ",
  description: "BLog page",
};
const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About us"
        description="Aimate delivers comprehensive AI solutions, leveraging our human-in-the-loop platform and expert team to transform unstructured data into precise training data for complex AI projects at scale."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Team />
    </>
  );
};

export default AboutPage;
