"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import useGlobalContext from "@/hooks/use-context";
import { blogDataType } from "@/interFace/api-interFace";

const BLOG_SECTION_HEADER = `Laissez-vous inspirer par DécoVert`;
const BLOG_SECTION_SUBHEADER = `Découvrir`;
const BLOG_SECTION_NO_BLOG_AVAILABLE = `Pas d'articles disponible`;

const BlogSection = () => {
  const { blog, setBlog } = useGlobalContext();
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [totalPages, seTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog?page=${page}&limit=${limit}`)
      .then(
        (res: {
          data: {
            blogs: blogDataType[];
            totalPages: number;
            currentPage: number;
          };
        }) => {
          setBlog(res.data.blogs);
          seTotalPages(res.data.totalPages);
          setCurrentPage(res.data.currentPage);
        }
      )
      .catch((e) => console.log(e));
  }, [page, limit, setBlog]);

  return (
    <section className="bd-news__area pt-125 pb-65">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="bd-section__title-wrapper text-center mb-55">
              <span className="bd-sub__title">{BLOG_SECTION_SUBHEADER}</span>
              <h2 className="bd-section__title mb-30">{BLOG_SECTION_HEADER}</h2>
            </div>
          </div>
        </div>
        {blog?.length ? (
          <div className="row">
            {blog.slice(0, 3).map((item, num) => (
              <div className="col-xl-4 col-lg-4 col-md-6" key={num}>
                <div className="bd-news__item mb-60">
                  <div className="bd-news__thumb w-img">
                    <Link href={`/blog-details/${item._id}`}>
                      <Image
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        src={item.img}
                        alt="news-image"
                      />
                    </Link>
                  </div>
                  <div className="bd-news__content">
                    <div className="bd-news__meta-list">
                      <div className="bd-news__meta-item">
                        <span>
                          <Link href="/blog">
                            <i className="fa-regular fa-user"></i>
                            {item.author}
                          </Link>
                        </span>
                      </div>
                      <div className="bd-news__meta-item">
                        <span>
                          <i className="fa-regular fa-clock"></i>
                          {item.date}
                        </span>
                      </div>
                    </div>
                    <div className="bd-news__title">
                      <h3>
                        <Link href={`/blog-details/${item._id}`}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                    <Link
                      className="bd-news__btn"
                      href={`/blog-details/${item._id}`}
                    >
                      En Savoir Plus
                      <span>
                        <i className="fa-solid fa-arrow-left"></i>
                        <i className="fa-solid fa-arrow-left"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">{BLOG_SECTION_NO_BLOG_AVAILABLE}</p>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
