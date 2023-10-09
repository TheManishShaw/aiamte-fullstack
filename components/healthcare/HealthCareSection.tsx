import React from "react";
import { healthCareServices } from "./healthcarwData";

const HealthCareSection = () => {
  return (
    <>
      <section className="">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold  mb-10">
            <span>Medical and Healthcare datasets for Machine Learning</span>
          </h1>
          <p className="font-medium leading-relaxed text-body-color">
            {" "}
            Patients today have high expectations for technology to replace
            painful manual surgeries with painless ones, and AI in medicine has
            a significant role alongside is dependent on it in the future.
            Artificial intelligence efficiently interprets various types of
            image data like CT scans, MRIs, X-rays and Ultrasounds. So our
            organization gives you an opportunity to shape your machine learning
            with high-quality datasets. X-rays, MR, and CT scans of multiple
            areas with various anomalies, tailored to your necessities. A
            Premium Quality collection, de-identified as per regulations and
            compliance, which enables AI/ML and AR/VR models to approach
            complicated and time saving solutions
          </p>
        </div>
      </section>

      {healthCareServices &&
        healthCareServices.map((service) => (
          <div className="overflow-hidden  dark:text-white text-black  py-10 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-2 lg:pt-4">
                  <div className="lg:max-w-3xl">
                    <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                      {service.title}
                    </p>
                    <p className="mt-6 text-lg  font-medium leading-relaxed text-body-color">
                      {service.description}
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base font-medium leading-relaxed text-body-color lg:max-w-none">
                      {service.features &&
                        service.features.map((feature) => (
                          <div
                            key={feature && feature?.name}
                            className="relative pl-9"
                          >
                            <dt className="inline font-semibold dark:text-white text-black">
                              {/* <CheckBadgeIcon
                                className="absolute left-1 top-1 h-5 w-5 text-violet-600"
                                aria-hidden="true"
                              /> */}
                            </dt>{" "}
                            <dd className="inline">{feature.description}</dd>
                          </div>
                        ))}
                    </dl>
                  </div>
                </div>

                <div className="flex items-center justify-center w-full ">
                  <img
                    className="object-cover w-full h-full max-w-2xl rounded-md"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
              </div>
            </div>
            <section className="">
              <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  {service.keyFeatures &&
                    service.keyFeatures.map((keyFeature) => (
                      <div
                        key={keyFeature.name}
                        className="bg-gray-100 group rounded-xl dark:bg-secondary p-4 cursor-pointer hover:bg-violet-500/70 duration-200  dark:hover:bg-gray-300/40 "
                      >
                        <h3 className="mb-2 text-xl font-bold dark:text-white">
                          {keyFeature.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-400">
                          {keyFeature.description}
                        </p>
                      </div>
                    ))}
                </div>
              </div>
            </section>
          </div>
        ))}
    </>
  );
};

export default HealthCareSection;
