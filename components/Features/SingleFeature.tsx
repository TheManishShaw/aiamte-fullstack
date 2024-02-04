import { Feature } from "@/types/feature";
import Link from "next/link";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, image, title, paragraph, url } = feature;
  return (
    <div>
      <Link
        className="group flex flex-col h-full  dark:bg-secondary border border-gray-200 dark:border-transparent  hover:shadow-xl transition-all duration-300 rounded-lg p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-primary/[.2] hover:scale-[1.08]"
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
        <span className="hover:scale-105 self-center text-md flex gap-2 text-slate-500">
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default SingleFeature;
