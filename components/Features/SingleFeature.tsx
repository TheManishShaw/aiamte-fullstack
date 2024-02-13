import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({
  feature,
  className,
}: {
  className: any;
  feature: Feature;
}) => {
  const { icon, image, title, paragraph, url } = feature;

  return (
    <div className={` w-full px-4 mb-6 md:w-1/2 lg:w-1/3`}>
      <div className="relative group flex flex-col h-full  dark:bg-secondary border border-gray-200 dark:border-transparent  hover:shadow-xl transition-all duration-300 rounded-2xl  dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-primary/[.2] hover:scale-[1.08] ">
        <div className="w-full h-56 px-4 pt-4">
          <img
            src={image}
            alt="Image Description"
            className="object-cover w-full h-full rounded-lg "
          />
        </div>
        <div>
          <div className="p-4">
            <div className="mb-3">
              <Link href={url}>
                <h2 className="text-2xl font-semibold dark:text-gray-300">
                  {title}
                </h2>
              </Link>
            </div>
            <p className=" text-base font-base text-gray-700 line-clamp-4  dark:text-gray-400">
              {paragraph}
            </p>
          </div>
          <div className="flex items-center mt-12 justify-end ">
            <Link
              href={url}
              className="absolute bottom-0 right-0 px-3 py-4 text-sm text-gray-100 bg-gray-800 rounded-tl-2xl rounded-br-2xl hover:bg-white hover:text-black"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
