import React from "react";
import { healthCareServices } from "./healthcarwData";

const HealthCareSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-xl mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Medical and Healthcare datasets for Machine Learning
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400">
              Patients today have high expectations for technology to replace
              painful manual surgeries with painless ones, and AI in medicine
              has a significant role alongside is dependent on it in the future.
              Artificial intelligence efficiently interprets various types of
              image data like CT scans, MRIs, X-rays and Ultrasounds. So our
              organization gives you an opportunity to shape your machine
              learning with high-quality datasets. X-rays, MR, and CT scans of
              multiple areas with various anomalies, tailored to your
              necessities. A Premium Quality collection, de-identified as per
              regulations and compliance, which enables AI/ML and AR/VR models
              to approach complicated and time saving solutions
            </p>
          </div>
        </div>
      </section>
      {healthCareServices &&
        healthCareServices.map((service) => (
          <div className="overflow-hidden dark:bg-gray-900 dark:text-white text-black bg-white py-10 sm:py-20">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div className="lg:pr-2 lg:pt-4">
                  <div className="lg:max-w-3xl">
                    <p className="mt-2 text-3xl font-bold tracking-tight  sm:text-4xl">
                      {service.title}
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                      {service.description}
                    </p>
                    <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
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
            <section className="bg-white dark:bg-gray-900">
              <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                  {service.keyFeatures &&
                    service.keyFeatures.map((keyFeature) => (
                      <div
                        key={keyFeature.name}
                        className="bg-gray-100 group rounded-xl dark:bg-gray-800 p-4 cursor-pointer hover:bg-violet-500/70 duration-200 hover:text-white dark:hover:bg-gray-300/40 "
                      >
                        <h3 className="mb-2 text-xl font-bold dark:text-white">
                          {keyFeature.name}
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 group-hover:text-gray-200">
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
