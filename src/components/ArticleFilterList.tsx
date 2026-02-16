import { useEffect, useMemo, useState } from "react";
import Writings from "./Writings";

type ArticleItem = {
  slug: string;
  data: {
    title: string;
    description: string;
    pubDate: string | Date;
    tags: string[];
    link?: string;
  };
};

type ArticleFilterListProps = {
  articles: ArticleItem[];
};

export default function ArticleFilterList({ articles }: ArticleFilterListProps) {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const countMap = new Map<string, number>();
    for (const article of articles) {
      for (const tag of article.data.tags ?? []) {
        countMap.set(tag, (countMap.get(tag) ?? 0) + 1);
      }
    }
    return [...countMap.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([tag]) => tag);
  }, [articles]);

  const filteredArticles = useMemo(() => {
    if (!activeTag) return articles;
    return articles.filter((article) => article.data.tags?.includes(activeTag));
  }, [articles, activeTag]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tagFromUrl = params.get("tag");
    if (!tagFromUrl) return;

    const matchedTag = tags.find((tag) => tag.toLowerCase() === tagFromUrl.toLowerCase());
    if (matchedTag) {
      setActiveTag(matchedTag);
    }
  }, [tags]);

  function updateUrlTag(tag: string | null) {
    const url = new URL(window.location.href);
    if (tag) {
      url.searchParams.set("tag", tag);
    } else {
      url.searchParams.delete("tag");
    }
    window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
  }

  function onTagClick(tag: string) {
    setActiveTag((prev) => {
      const nextTag = prev === tag ? null : tag;
      updateUrlTag(nextTag);
      return nextTag;
    });
  }

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const active = activeTag === tag;
          return (
            <button
              key={tag}
              type="button"
              onClick={() => onTagClick(tag)}
              className={
                active
                  ? "inline-flex items-center rounded-full py-2 px-4 border-2 border-[#ffffffd9] text-[#0d0e11] bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,255,255,0.78)_85%)] backdrop-blur-sm shadow-[0_8px_24px_rgba(255,255,255,0.18)] text-sm font-semibold duration-100"
                  : "inline-flex items-center rounded-full py-2 px-4 border-2 border-[#ffffff73] text-white bg-[#ffffff14] hover:bg-[#ffffff33] backdrop-blur-sm text-sm font-medium duration-100"
              }
            >
              {tag}
            </button>
          );
        })}
      </div>

      <div className="grid gap-3">
        {filteredArticles.map((article) => (
          <Writings key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
