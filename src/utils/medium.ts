import Parser from "rss-parser";

export type MediumPost = {
  source: "medium";
  data: {
    title: string;
    description: string;
    pubDate: string;
    tags: string[];
    slug: string;
    coverImage?: string;
    link: string;
  };
  updatedAt?: string;
};

type MediumCustomItem = {
  "content:encoded"?: string;
  categories?: string[];
  pubDate?: string;
  isoDate?: string;
};

const parser: Parser<unknown, MediumCustomItem> = new Parser({
  customFields: {
    item: ["content:encoded"],
  },
});

const MEDIUM_FEED_URL = "https://medium.com/feed/@thisisaidil";

/**
 * Strip HTML tags and truncate text
 */
function extractText(html = "", maxLength = 180): string {
  const text = html
    .replace(/<figure[\s\S]*?<\/figure>/gi, "") // remove images
    .replace(/<[^>]+>/g, "") // remove HTML tags
    .replace(/\s+/g, " ")
    .trim();

  return text.length > maxLength ? text.slice(0, maxLength) + "…" : text;
}

/**
 * Extract first image from content:encoded
 */
function extractCoverImage(html = ""): string | undefined {
  const match = html.match(/<img[^>]+src="([^">]+)"/i);
  return match?.[1];
}

/**
 * Convert Medium link to slug
 */
function extractSlug(link: string): string {
  try {
    const url = new URL(link);
    return url.pathname.replace(/^\/|\/$/g, ""); // remove leading/trailing slash
  } catch {
    return link; // fallback
  }
}

export async function fetchMediumPosts(): Promise<MediumPost[]> {
  const feed = await parser.parseURL(MEDIUM_FEED_URL);

  return feed.items.map((item) => {
    const content = item["content:encoded"] ?? "";
    const link = item.link ?? "";
    return {
      source: "medium",
      updatedAt: item.isoDate,
      data: {
        title: item.title ?? "",
        description: extractText(content),
        pubDate: item.pubDate ?? "",
        tags: item.categories ?? [],
        coverImage: extractCoverImage(content),
        slug: extractSlug(link),
        link,
      },
    };
  });
}
