import Breadcrumb from "@/components/Common/Breadcrumb";
import Features from "@/components/Features";
import { HealthcareSectionData } from "@/components/healthcare/healthcarwData";

const SpeechAudio = () => {
  return (
    <>
      <Breadcrumb
        pageName="Speech Audio"
        description="These datasets encompass diverse languages, accents, and acoustic environments, enabling the development of more inclusive and accurate voice technologies."
      />
      <div className="relative max-w-screen-xl p-4 px-4 mx-auto bg-gray-100 rounded-2xl dark:bg-secondary sm:px-6 lg:px-8 py-26 lg:mt-20">
        <div className="relative">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="ml-auto lg:col-start-2 lg:max-w-2xl">
              <p className="text-base font-semibold leading-6 text-purple-500 uppercase">
                Interactive
              </p>
              <h4 className="mt-2 text-2xl font-extrabold leading-8 text-gray-900 dark:text-white sm:text-3xl sm:leading-9">
                Audio / Speech / Voice Datasets
              </h4>
              <p className="mt-4 text-xl leading-6 text-gray-500 dark:text-gray-300">
                We generate tangible information for you together with expertly
                done transcription and extraction by a team of experts in
                qualitative development, training, and developing conversational
                AI. Whether it can be single or multiple speakers, spontaneous
                or utterances, or scripted conversations.
              </p>
              <p className="mt-4 text-xl leading-6 text-gray-500 dark:text-gray-300">
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
      {HealthcareSectionData.map((data: any) => (
        <section className="relative py-20 overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="max-w-6xl mx-auto text-center mb-16">
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold  mb-10">
                <span>{data.title}</span>
              </h1>
              <p className="text-body-color text-xl font-medium leading-relaxed">
                {data.description}
              </p>
            </div>
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap -mx-6 items-center">
                <div className="w-full lg:w-2/5 xl:w-auto px-4 mx-auto lg:pb-10 mb-16 lg:mb-0">
                  {data?.AdvancedFeatures?.map((item: any) => (
                    <div key={item.id} className="mx-auto max-w-sm">
                      <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                        <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-blue-100 rounded-full">
                          <img
                            src="/saturn-assets/images/features/icon-element.svg"
                            alt=""
                          />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="text-xl text-gray-400">
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
                <div className="w-full lg:w-2/5 xl:w-auto mx-auto px-2 lg:pb-10">
                  {data?.ServicesOffered?.map((item: any) => (
                    <div key={item.id} className="mx-auto max-w-sm">
                      <div className="flex items-center pb-12 mb-12 border-b border-gray-100">
                        <div className="flex flex-shrink-0 w-15 h-15 mr-6 items-center justify-center bg-red-200 rounded-full">
                          <img src="" alt="" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-semibold">
                            {item.title}
                          </h3>
                          <span className="text-lg text-gray-400">
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

      <Features />
    </>
  );
};

export default SpeechAudio;
