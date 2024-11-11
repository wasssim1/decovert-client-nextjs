"use client";

import { blogDataType } from "@/interFace/api-interFace";
import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogDetailsArea from "./BlogDetailsArea";

const BREADCRUMB_HOME = "Acceuil";
const BREADCRUMB_DISCOVER = "Découvrir";

const BlogDetailsMain = ({ blogItem }: { blogItem: blogDataType }) => {
  // useEffect(() => {
  //   if (id) {
  //     axios
  //       .get(`${process.env.BASE_URL}blog/single-blog/${id}`)
  //       .then((res) => {
  //         setBlog(res.data.data);
  //       })
  //       .catch((e) => console.log(e));
  //   }
  // }, [id, setBlog]);

  return (
    <>
      {/* <Breadcrumb breadHome={BREADCRUMB_HOME} breadMenu={BREADCRUMB_DISCOVER} /> */}
      <BlogDetailsArea blogItem={blogItem} />
    </>
  );
};

export default BlogDetailsMain;
