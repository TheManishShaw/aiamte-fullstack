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
      <section className="flex items-center py-10 bg-stone-100 xl:h-screen font-poppins dark:bg-gray-950 ">
        <div className="justify-center flex-1 container py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative">
                <img
                  src="https://i.postimg.cc/QtyYkbxp/pexels-andrea-piacquadio-927022.jpg"
                  alt=""
                  className="relative z-40 object-cover w-full h-96 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                />
                <div className="absolute z-10 hidden w-full h-full bg-white rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
                <div className="absolute z-50 text-white transform -translate-y-1/2 cursor-pointer top-1/2 left-[46%] hover:text-white-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-14 h-14 bi bi-play-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="relative">
                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
                  About Us
                </h1>
                <h1 className="pl-2 text-3xl font-bold border-l-8 border-white-400 md:text-5xl dark:text-white">
                  Welcome to Aimate
                </h1>
              </div>
              <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">
                At Aimate, we're passionate about harnessing the power of
                artificial intelligence to drive innovation and solve complex
                challenges. With a dedicated team of experts and a cutting-edge
                human-in-the-loop platform, we specialize in delivering
                comprehensive AI solutions that transform unstructured data into
                precise training data for projects of any scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      <AboutSectionOne />
      <AboutSectionTwo />
      <Team />
    </>
  );
};

export default AboutPage;
