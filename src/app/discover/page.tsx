import BlogGridMain from "@/components/blog-grid/BlogGridMain";
import { ALL_BLOGS_DATA } from "@/data/blog-data";
import { blogDataType } from "@/interFace/api-interFace";
import Wrapper from "@/layout/DefaultWrapper";

const fetchBlogsData = async (): Promise<blogDataType[]> => {
  return ALL_BLOGS_DATA;
};

const BlogGridPage = async () => {
  const blogs = await fetchBlogsData();

  return (
    <>
      <Wrapper>
        <main>
          <BlogGridMain blogsList={blogs} />
        </main>
      </Wrapper>
    </>
  );
};

export default BlogGridPage;
