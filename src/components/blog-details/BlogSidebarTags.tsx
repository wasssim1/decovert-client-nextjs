import Link from "next/link";

const CARD_TITLE_TAGS = "Hashtags";

const POPULAR_TAGS = [
  "jardin",
  "jardinage",
  "plantes",
  "fruitiers",
  "medical",
  "spirituel",
  "comment-faire",
  "soins",
];

const BlogSidebarTags = () => {
  return (
    <div className="sidebar__widget mb-30">
      <div className="sidebar__widget-head mb-35">
        <h4 className="sidebar__widget-title">{CARD_TITLE_TAGS}</h4>
      </div>
      <div className="sidebar__widget-content">
        <div className="sidebar__tag">
          {POPULAR_TAGS.map((tag, idx) => (
            <Link key={`${tag}-${idx}`} href={`/discover?tag=${tag}`}>
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebarTags;
