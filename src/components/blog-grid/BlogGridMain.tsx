import { blogDataType } from "@/interFace/api-interFace";

import Breadcrumb from "../common/breadcrumb/Breadcrumb";
import BlogGridSection from "./BlogGridSection";

const BREADCRUMB_HOME = "Acceuil";
const BREADCRUMB_CURRENT = "Découvrir";

const BlogGridMain = ({ blogsList }: { blogsList: blogDataType[] }) => {
  return (
    <>
      <Breadcrumb breadHome={BREADCRUMB_HOME} breadMenu={BREADCRUMB_CURRENT} />
      <BlogGridSection blogsList={blogsList} />
    </>
  );
};

export default BlogGridMain;
