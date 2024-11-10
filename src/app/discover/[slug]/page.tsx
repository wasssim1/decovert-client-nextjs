import BlogDetailsMain from "@/components/blog-details/BlogDetailsMain";
import { ALL_BLOGS_DATA } from "@/data/blog-data";
import Wrapper from "@/layout/DefaultWrapper";
import { notFound } from "next/navigation";

const BlogDetailsDynamic = ({ params }: { params: { slug: string } }) => {
  const slug = params.slug;

  const blogItem = ALL_BLOGS_DATA.find((blog) => blog.slug === slug);

  if (!blogItem) {
    notFound();
  }

  return (
    <>
      <Wrapper>
        <main>
          <BlogDetailsMain blogItem={blogItem} />
        </main>
      </Wrapper>
    </>
  );
};

export default BlogDetailsDynamic;
