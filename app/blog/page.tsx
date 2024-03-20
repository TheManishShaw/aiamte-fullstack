import SingleBlog from "@/components/Blog/SingleBlog";
import { getBlogs, getResource } from "@/sanity/actions";
import { Metadata } from "next";
import React from "react";

// export const revalidate = 900;
interface Props {
  searchParams: { [key: string]: string | undefined };
}
export const metadata: Metadata = {
  title: "Blog | Aimate ",
  description: "BLog page",
};
const page = async ({ searchParams }: Props) => {
  const allBlogs = await getBlogs();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full mb-10">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white dark:text-white">
            Aimate Resources
          </h1>
        </div>
      </section>
      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
        {allBlogs?.map((blog: any) => (
          <SingleBlog blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default page;
