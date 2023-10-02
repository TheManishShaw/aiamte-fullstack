import Breadcrumb from "@/components/Common/Breadcrumb";
import HealthCareSection from "@/components/healthcare/HealthCareSection";
import { HealthcareSectionData } from "@/components/healthcare/healthcarwData";

const Healthcare = () => {
  return (
    <>
      <Breadcrumb
        pageName="Health Care"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />

      {HealthcareSectionData.map((data: any) => (
        <section className="relative py-20 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto text-center mb-16">
              {/* <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-orange-900 bg-orange-50 rounded-full">
                FEATURES
              </span> */}
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold  mb-10">
                <span>{data.title}</span>
              </h1>
              <p>{data.description}</p>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-6 items-center">
                <div className="w-full lg:w-2/5 xl:w-auto px-4 mx-auto lg:pb-10 mb-16 lg:mb-0">
                  {data.LeftSideContent.map((item: any) => (
                    <div key={item.id} className="mx-auto max-w-sm">
                      <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                        <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-100 rounded-full">
                          <img
                            src="saturn-assets/images/features/icon-element.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="w-full lg:w-1/5 xl:w-auto mx-auto px-4 xl:-mr-10 mb-16 lg:mb-0">
                  <img
                    className="block h-80 md:h-100 lg:h-auto xl:h-150 mx-auto"
                    src={data.image}
                    alt=""
                  />
                </div>
                <div className="w-full lg:w-2/5 xl:w-auto mx-auto px-4 lg:pb-10">
                  {data.RightSideContent.map((item: any) => (
                    <div key={item.id} className="mx-auto max-w-sm">
                      <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                        <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-red-200 rounded-full">
                          <img src="" alt="" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="text-sm text-gray-400">
                            {item.description}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
      <section className="bg-gradient-to-t from-white/[54%] to-transparent py-14 dark:bg-none lg:py-[100px]">
        <div className="container">
          <div className="heading text-center">
            <h6 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold  mb-10">
              Our Culture
            </h6>
            <h4>Be Great. Do Good. Have Fun.</h4>
          </div>
          <div className="grid gap-4 md:gap-6">
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div
                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[43%] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-fancybox="gallery"
                data-src="/images/services/Modality MRI.png"
              >
                <img
                  src="/images/services/Modality CT scan.jpg"
                  alt="gallery-1"
                  className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                />
              </div>
              <div
                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[35%] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-fancybox="gallery"
                data-src="/images/services/Modality-X-rays.jpg"
              >
                <img
                  src="/images/services/Data-Annotation2.jpeg"
                  alt="gallery-2"
                  className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                />
              </div>
              <div
                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-[22%] aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-fancybox="gallery"
                data-src="/images/services/Data-Annotation3.png"
              >
                <img
                  src="/images/services/Modality-X-rays.jpg"
                  alt="gallery-3"
                  className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:gap-6">
              <div
                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-3/5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-fancybox="gallery"
                data-src="/images/services/Modality-X-rays.jpg"
              >
                <img
                  src="/images/services/Modality-X-rays.jpg"
                  alt="gallery-4"
                  className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                />
              </div>
              <div
                className="mx-auto w-full cursor-pointer overflow-hidden rounded-[32px] sm:w-2/5 aos-init aos-animate"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-fancybox="gallery"
                data-src="/images/services/Modality-X-rays.jpg"
              >
                <img
                  src="/images/services/Modality-X-rays.jpg"
                  alt="gallery-5"
                  className="h-full w-full rounded-[32px] object-cover transition duration-500 hover:rotate-12 hover:scale-125"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-white rounded-2xl dark:bg-gray-800 sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-purple-500 uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Audio / Speech / Voice Datasets
              </h4>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                We generate tangible information for you together with expertly
                done transcription and extraction by a team of experts in
                qualitative development, training, and developing conversational
                AI. Whether it can be single or multiple speakers, spontaneous
                or utterances, or scripted conversations.
              </p>
              <p className="mt-4 text-lg leading-6 text-gray-500 dark:text-gray-300">
                The higher quality services of our organization focused on
                classifying and identifying appropriate names in the text with
                NER. Additionally, Fineax AI only prefers native speakers
                because we help to make high-quality and pure audio
              </p>
            </div>
            <div className="relative mt-10 lg:-mx-4 relative-20 lg:mt-0 lg:col-start-1">
              <div className="relative space-y-4">
                <div className="flex items-end justify-center space-x-4 lg:justify-start">
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="/images/services/Data-Annotation1.jpg"
                    alt="1"
                  />
                  <img
                    className="w-40 rounded-lg shadow-lg md:w-64"
                    width="260"
                    src="/images/services/Data-Annotation1.jpg"
                    alt="2"
                  />
                </div>
                <div className="flex items-start justify-center ml-12 space-x-4 lg:justify-start">
                  <img
                    className="w-24 rounded-lg shadow-lg md:w-40"
                    width="170"
                    src="/images/services/Data-Annotation1.jpg"
                    alt="3"
                  />
                  <img
                    className="w-32 rounded-lg shadow-lg md:w-56"
                    width="200"
                    src="/images/services/Data-Annotation1.jpg"
                    alt="4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <HealthCareSection />
    </>
  );
};

export default Healthcare;
