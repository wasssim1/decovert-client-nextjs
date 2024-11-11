import Image from "next/image";
import Link from "next/link";

import { blogDataType } from "@/interFace/api-interFace";

import BlogCommentForm from "./BlogCommentForm";
import BlogComments from "./BlogComments";
import BlogSidebarBlogs from "./BlogSidebarBlogs";
import BlogSidebarTags from "./BlogSidebarTags";

const BLOG_TAGS = "Plus de Hashtags";

const BlogDetailsArea = ({ blogItem }: { blogItem: blogDataType }) => {
  return (
    <>
      <div className="blog-area pt-115 pb-100">
        <div className="container small-container">
          <div className="row">
            <div className="col-xl-8 col-lg-12">
              <div className="blog-main-wrapper mb-30">
                <div className="row">
                  <div className="blog-wrapper position-relative blog-details-wrapper mb-30">
                    <div className="blog-thumb ">
                      <Image
                        src={blogItem?.img}
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        alt="blog-img"
                      />
                    </div>
                    <div className="blog-content-wrapper">
                      <div className="blog-meta">
                        <div className="blog-date">
                          <i className="fa-solid fa-calendar"></i>
                          <span>{blogItem?.date}</span>
                        </div>
                        {blogItem.readTime && (
                          <div className="bd-news__meta-item">
                            <span>
                              <i className="fa-regular fa-clock"></i>
                              {blogItem.readTime}
                            </span>
                          </div>
                        )}
                        <div className="blog-user">
                          <i className="fa-regular fa-user"></i>
                          <span>{blogItem?.author}</span>
                        </div>
                        {/* <div className="blog-comrent">
                          <i className="fal fa-comments"></i>
                          <span>
                            {blogItem?.comment > 1
                              ? `${blogItem?.comment} commentaires`
                              : `${blogItem?.comment} commentaire`}
                          </span>
                        </div> */}
                      </div>

                      <div className="blog-content">
                        <h3>{blogItem?.title}</h3>
                        {blogItem.blogContent.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))}

                        <div className="blog__details__tag tagcloud">
                          {blogItem.tags?.map((tag, idx) => (
                            <Link
                              key={`${tag}-${idx}`}
                              href={`/discover?tag=${tag}`}
                            >
                              #{tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <BlogComments id={blogItem?.slug} />
                <BlogCommentForm item={blogItem && blogItem} />
              </div>
            </div>

            {/* Blog Detail sidebar */}
            <div className="col-xl-4 col-lg-8 col-md-8">
              <div className="sidebar-widget-wrapper mb-30">
                {/* <BlogSidebarSearch /> */}
                {/* <BlogSidebarAbout /> */}
                <BlogSidebarBlogs />
                {/* <BlogSidebarCategory /> */}
                <BlogSidebarTags />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
