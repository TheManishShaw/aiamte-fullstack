import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section
        id="features"
        className="bg-primary/[.03] py-16 md:py-20 lg:py-28"
      >
        <div className="container">
          <SectionTitle
            center={true}
            title="AI Training Data services"
            paragraph="At Aimate, Our goal is improved accuracy that you can rely on.
            We can guarantee that our clients obtain accurate translation and interpretation services for their needs thanks to the use of contemporary technologies. Our technologies encompass a broad range of instruments and methodologies, such as content management systems, machine translation tools, Computer-assisted translation tools, and translation management system-related methodologies. Because of our improved quality assurance procedures, we are now able to provide both qualified and non-certified translators with high-quality translation and virtual interpretation services."
          />

          <div className=" flex flex-wrap justify-center -mx-4 ">
            {featuresData.map((feature, index) => (
              <SingleFeature
                key={feature.id}
                feature={feature}
                className={index >= 3 ? "col-span-1" : ""}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
