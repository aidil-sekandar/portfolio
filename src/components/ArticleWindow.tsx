import { useState } from "react";
import Tab from "./Tab";
import Writings from "./Writings";

type ArticleWindowProps = {
  allArticles: { data: any; slug?: string; link?: string }[];
  allMedium: { data: any; updatedAt?: string }[];
};

export default function ArticleWindow({ allArticles, allMedium }: ArticleWindowProps) {
  const [showTab, setTab] = useState<"article" | "medium">("article");

  function handleTabChange(e: React.MouseEvent<HTMLButtonElement>) {
    const id = (e.target as HTMLButtonElement).id;
    if (id === "article" || id === "medium") {
      setTab(id);
    }
  }

  return (
    <div className="md:col-span-2">
      {/* Tabs */}
      <div className="flex gap-3 font-semibold">
        <Tab
          isActive={showTab === "article"}
          title="Article"
          onShow={handleTabChange}
          id="article"
        />
        <Tab
          isActive={showTab === "medium"}
          title="Medium Blog"
          onShow={handleTabChange}
          id="medium"
        />
      </div>

      {/* Content */}
      <div>
        {showTab === "article" &&
          allArticles.slice(0, 5).map((article) => (
            <Writings
              key={article.slug ?? article.data.title}
              article={article}
            />
          ))}

        {showTab === "medium" &&
          allMedium.slice(0, 5).map((post) => (
            <Writings
              key={post.data.slug ?? post.data.title}
              article={post}
            />
          ))}
      </div>

      {/* Readmore */}
      <div className="mt-4 grid justify-center">
        <a
          href={showTab === "article" ? "/article" : "https://thisisaidil.medium.com/"}
          className="rounded-md py-3 px-6 w-max text-base md:text-md flex items-center border-2 border-[#BABABC] hover:bg-[#ffffff10] text-white"
          target={showTab === "medium" ? "_blank" : undefined} // open Medium in new tab
        >
          <span className="mr-2">
            Read all ({showTab === "article" ? allArticles.length : allMedium.length})
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
            ></path>
          </svg>
        </a>
      </div>

    </div>
  );
}
