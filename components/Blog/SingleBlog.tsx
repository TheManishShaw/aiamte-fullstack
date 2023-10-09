import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const {
    popularTags,
    category,
    title,
    _id,
    image,
    views,
    authorImg,
    author,
    description,
    _createdAt,
  } = blog;
  const date = format(new Date(_createdAt), "dd-MMM-yyyy");
  return (
    <>
      <div
        className="wow fadeInUp relative overflow-hidden bg-white shadow-one dark:bg-secondary border border-gray-200 dark:border-transparent hover:border-transparent hover:shadow-xl transition-all duration-300 rounded-md dark:hover:border-transparent dark:hover:shadow-gray-800/[.4] hover:scale-[1.01]"
        data-wow-delay=".1s"
      >
        <Link href={`/blog/${_id}`} className="relative block h-[220px] w-full">
          <span className="absolute top-6 right-6 z-20 inline-flex items-center justify-center rounded-full bg-primary py-2 px-4 text-sm font-semibold capitalize text-white">
            {category}
          </span>
          <Image src={image} alt="image" fill />
        </Link>
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href={`/blog/${_id}`}
              className="mb-4 block line-clamp-1 w-full text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-6 border-b line-clamp-2 border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10"></div>
          <div className="flex items-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="mr-4">
                <div className="relative bg-white h-10 w-10 overflow-hidden rounded-full">
                  <Image
                    src={"/images/favicon.png"}
                    alt="author"
                    width={40}
                    height={40}
                  />
                </div>
              </div>
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  By
                </h4>
                <p className="text-xs text-body-color">{author}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4>
              <p className="text-xs text-body-color">{date}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
