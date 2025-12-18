import { formatDate } from "@/utils/formatDate.js";

export default function ArticleCard({ article }) {
  return (
    <a
      href={article.slug ? `/article/${article.slug}` : article.data.link}
      className="items-center p-6 transition"
    >
      <div className="bg-cardColor p-6 rounded-2xl duration-100 hover:scale-[1.02]">
        <time className="text-sm">
          {formatDate(article.data.pubDate)}
        </time>

        <h1 className="font-bold text-white text-2xl my-3">
          {article.data.title}
        </h1>

        <p className="mb-5">
          {article.data.description}
        </p>

        <div className="flex gap-2 flex-wrap">
          {article.data.tags.map((tag, index) => (
            <span
              key={index}
              className="block w-max py-1 px-4 rounded bg-[#ffffff20] text-white"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
