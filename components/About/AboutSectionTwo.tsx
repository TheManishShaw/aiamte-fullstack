import { aboutFeatureSectionData } from "@/utils/aboutFeaturesectionData";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <>
      <section className="">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
            explore <br /> How we works
          </h1>

          <div className="mt-2">
            <span className="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span className="inline-block w-3 h-1 ml-1 bg-primary rounded-full"></span>
            <span className="inline-block w-1 h-1 ml-1 bg-primary rounded-full"></span>
          </div>

          <div className="mt-8 xl:mt-12 lg:flex lg:items-center text-base !leading-relaxed text-body-color">
            <div className="grid w-full grid-cols-1 gap-8 lg:w-1/2 xl:gap-16 md:grid-cols-2">
              {aboutFeatureSectionData.map((item) => (
                <div key={item.id} className="space-y-3">
                  <span className="inline-block p-3 text-primary bg-primary/20 rounded-xl dark:text-white dark:primary">
                    {item.icon}
                  </span>

                  <h1 className="text-xl font-semibold text-gray-700 capitalize dark:text-white">
                    {item.title}
                  </h1>

                  <p className="">{item.paragraph}</p>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex lg:w-1/2 lg:justify-center">
              <img
                className="w-[28rem] h-[28rem] flex-shrink-0 object-cover xl:w-[34rem] xl:h-[34rem] rounded-full"
                src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSectionTwo;
