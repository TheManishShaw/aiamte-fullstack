import SingleBlog from "@/components/Blog/SingleBlog";
import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import SearchForm from "@/components/SearchForm";
import SubHeader from "@/components/SubHeader";
import { getBlogs, getResource, getResourcePlaylist } from "@/sanity/actions";
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
  const resources = await getResource({
    query: searchParams?.query || "",
    category: searchParams?.category || "",
    page: "1",
  });

  // const resourcesPlaylist = await getResourcePlaylist();
  const blogs = await getBlogs();

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white dark:text-white">
            Aimate Resources
          </h1>
        </div>
        <SearchForm />
      </section>
      <Filters />
      {(searchParams?.query || searchParams?.category) && (
        <section className="flex-center mt-6 w-full flex-col sm:mt-20">
          <SubHeader
            category={searchParams?.category || ""}
            query={searchParams?.query || ""}
          />
          <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
            {resources?.length > 0 ? (
              resources.map((resource: any) => (
                <ResourceCard
                  key={resource._id}
                  title={resource.title}
                  id={resource._id}
                  image={resource.image}
                  downloadNumber={resource.views}
                  downloadLink={resource.downloadLink}
                  description={resource.description}
                  category={resource.category}
                />
              ))
            ) : (
              <p className="body-regular text-white-400 mb-4">
                {" "}
                No resource found
              </p>
            )}
          </div>
        </section>
      )}

      <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
        {blogs && blogs.map((blog: any) => <SingleBlog blog={blog} />)}
      </div>
    </main>
  );
};

export default page;
