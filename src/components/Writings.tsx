import { formatDate } from "@/utils/formatDate.js";

export default function ArticleCard({ article }) {
  return (
    <a
      href={article.slug ? `/article/${article.slug}` : article.data.link}
      className="block items-center transition"
    >
      <div className="glass-card p-6 duration-100 hover:scale-[1.01]">
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
              className="glass-chip"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
