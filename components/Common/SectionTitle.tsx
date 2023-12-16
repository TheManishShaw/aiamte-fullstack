const SectionTitle = ({
  title,
  paragraph,
  width = "770px",
  center,
  mb = "100px",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className=" text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <div className=" mb-4">
          <span className="inline-block w-40 h-1 bg-white rounded-full"></span>
          <span className="inline-block w-3 h-1 ml-1 bg-white rounded-full"></span>
          <span className="inline-block w-1 h-1 ml-1 bg-white rounded-full"></span>
        </div>
        <p className="text-lg !leading-relaxed text-body-color md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
