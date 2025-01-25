"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { ALL_BLOGS_DATA } from "@/data/blog-data";

const blogsList = ALL_BLOGS_DATA;

const CARD_TITLE_RECENT_POSTS = "Articles Récents";

const BlogSidebarBlogs = () => {
  // const [blogs, setBlogs] = useState<blogDataType[]>([]);
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(9);
  const [totalPages, seTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(0);

  /* useEffect(() => {
    axios
      .get(`${process.env.BASE_URL}blog/all-blog?page=${page}&limit=${limit}`)
      .then((res) => {
        setBlogs(res.data.blogs);
        seTotalPages(res.data.totalPages);
        setCurrentPage(res.data.currentPage);
      })
      .catch((e) => {
        console.log(e);
        setBlogs(ALL_BLOGS_DATA.slice(0, 4));
      });
  }, [page, limit, setBlogs]); */

  return (
    <div className="sidebar__widget mb-30">
      <div className="sidebar__widget-head mb-35">
        <h4 className="sidebar__widget-title">{CARD_TITLE_RECENT_POSTS}</h4>
      </div>
      <div className="sidebar__widget-content">
        {blogsList && (
          <div className="rc__post-wrapper">
            {blogsList.map((item, num) => {
              const title = item.title;
              const words = title.split(" ");
              const sortTitle = words.slice(0, 5).join(" ");
              return (
                <div className="rc__post d-flex align-items-center" key={num}>
                  <div className="rc__thumb mr-20">
                    <Link href={`/discover/${item.slug}`}>
                      <Image
                        width={80}
                        height={120}
                        style={{ width: "auto", height: "100%" }}
                        src={item.img}
                        alt="news-image"
                      />
                    </Link>
                  </div>
                  <div className="rc__content">
                    <div className="rc__meta">
                      <span>{item.date}</span>
                    </div>
                    <h6 className="rc__title">
                      <Link href={`/discover/${item.slug}`}>{sortTitle}</Link>
                    </h6>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogSidebarBlogs;
