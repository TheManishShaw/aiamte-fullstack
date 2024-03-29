import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center p-2 justify-center rounded-md bg-white bg-opacity-30 text-white">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp  relative mx-auto  aspect-[25/24] w-[80%] lg:mr-0">
                <Image
                  src="/images/about/machine-learning.png"
                  alt="about-image"
                  fill
                  className="mx-auto lg:mr-0"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="What We Do Best     "
                paragraph="We have vast amounts of structured big data in a variety of categories ready to be put toward your project success. From healthcare and technology to so much more, find what you’re looking for to train your models."
                mb="44px"
              />

              {/* 






 */}

              <div className="wow fadeInUp mb-12 max-w-[780px] lg:mb-0">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {/* <List text="AI Training Data" />
                    <List text="Data Collection, Labeling & Annotation" />
                    <List text="Data Catalogs & Licensing" />
                    <List text="Computer Vision" /> */}
                    <List text="Including Human Insights in Data That Are Actionable." />
                    <List text="Take benefit of our Local relevance partnered with global expertise in AI" />
                    <List text="Pairing human intelligence with AI to spark discoveries around the globe." />
                    <List text="A global source of unique and important human input regarding unstructured data." />
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {/* <List text="Conversational AI" />
                    <List text="Healthcare AI" />
                    <List text="Sentiment Analysis Services" />
                    <List text="Facial Recognition" /> */}
                    <List text="Data to Insight, Now Accessible Worldwide." />
                    <List text="AI Data Training for Any Language and Any Context." />
                    <List text="AI guidance that has been authorized by people, but anonymously" />
                    <List text="The most advanced human-powered data annotation platform around the world, independent of language." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
