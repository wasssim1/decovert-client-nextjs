"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import useGlobalContext from "@/hooks/use-context";
import TeamPreloader from "@/preloaders/TeamPreloader";

import { blogDataType } from "@/interFace/api-interFace";
import Pagination from "../elements/product/Pagination";

const PAGE_READ_MORE = "En Savoir Plus";
const PAGE_NO_BLOGS_FOUND = "Pas d'article disponible";

const BlogGridSection = ({ blogsList }: { blogsList: blogDataType[] }) => {
  const { blog, setBlog } = useGlobalContext();
  const [searchTag, setSearchTag] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(20);
  const [totalPages, seTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  const routeParams = useSearchParams();
  useEffect(() => {
    const _searchTag = routeParams.get("tag");
    setSearchTag(_searchTag || "");
  }, [routeParams, blogsList]);

  useEffect(() => {
    if (searchTag) {
      const filteredBlogs = blogsList.filter((blog) =>
        blog.tags.includes(searchTag)
      );
      setBlog(filteredBlogs);
    } else {
      setBlog(blogsList);
    }
  }, [searchTag]);

  return (
    <section className="bd-news__grid-area pt-115 pb-65">
      <div className="container small-container">
        {!!searchTag && (
          <div className="sidebar__tag mb-3">
            <span>#{searchTag}</span>
            <Link href={`/discover`} className="mx-1">
              <i className="fa-regular fa-close"></i>
            </Link>
          </div>
        )}
        <div className="row">
          {blog.length ? (
            blog.map((item, num) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <Link href={`/discover/${item.slug}`}>
                      <Image
                        src={item.img}
                        alt="news-Img"
                        width={500}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Link>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta-list">
                      {/* <div className="bd-news__meta-item">
                        <span>
                          <Link href="/blog">
                            <i className="fa-regular fa-user"></i>
                            {item.author}
                          </Link>
                        </span>
                      </div> */}
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-regular fa-calendar"></i>
                          {item.date}
                        </span>
                      </div>
                      {item.readTime && (
                        <div className="bd-news__meta-item">
                          <span>
                            <i className="fa-regular fa-clock"></i>
                            {item.readTime}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="bd-news__title">
                      <h3>
                        <Link href={`/discover/${item.slug}`}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      className="bd-news__btn"
                      href={`/discover/${item.slug}`}
                    >
                      {PAGE_READ_MORE}
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              {loading ? (
                <>
                  <TeamPreloader />
                </>
              ) : (
                <>
                  <p className="text-center mt-5">{PAGE_NO_BLOGS_FOUND}</p>
                </>
              )}
            </>
          )}
        </div>

        {blog?.length ? (
          <div className="row justify-content-center">
            <div className="col-xxl-12">
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setPage={setPage}
                Pagination_space="d-flex justify-content-center mt-40  mb-45"
              />
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default BlogGridSection;
