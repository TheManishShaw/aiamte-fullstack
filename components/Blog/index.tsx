import { getBlogs, getResourcePlaylist } from "@/sanity/actions";
import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";

const Blog = async () => {
  const blogList = await getBlogs();
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-16">
      <div className="container">
        <SectionTitle
          title="Our Latest Blogs"
          paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogList.map((blog: any) => (
            <SingleBlog blog={blog} />
          ))}
        </div>

        {/* 
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogList.map((blog: any) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Blog;
