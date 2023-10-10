import { Feature } from "@/types/feature";
import Image from "next/image";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, image, title, paragraph, url } = feature;
  return (
    <>
      {/* <div className="wrapper  text-gray-900 group transform cursor-pointer antialiased  transition-all duration-200 ease-in-out hover:scale-105">
        <Link href={url}>
          <img
            src={image}
            alt=" random imgee"
            className="h-72 w-full  rounded-lg object-cover object-center shadow-md "
          />

          <div className="relative -mt-16 px-4  duration-200 group-hover:-translate-y-6 ">
            <div className="rounded-lg bg-white p-6 text-primary shadow-lg dark:bg-dark">
              <h4 className="mt-1 truncate text-xl font-bold uppercase leading-tight text-black group-hover:underline dark:text-white">
                {title}
              </h4>

              <div className="mt-1 text-base font-medium leading-relaxed text-body-color">
                {paragraph}
              </div>
            </div>
          </div>
        </Link>
      </div> */}

      <Link
        className="group flex flex-col h-full  dark:bg-secondary border border-gray-200 dark:border-transparent  hover:shadow-xl transition-all duration-300 rounded-md p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-primary/[.2] hover:scale-[1.01]"
        href={url}
      >
        <div className="aspect-w-16 aspect-h-11">
          <img
            className="w-full object-cover h-64 rounded-md"
            src={image}
            alt="Image Description"
          />
        </div>
        <div className="my-6">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
            {title}
          </h3>
          <p className="mt-5 text-xl line-clamp-3 font-medium leading-relaxed text-body-color">
            {paragraph}
          </p>
        </div>
      </Link>
    </>
  );
};

export default SingleFeature;
