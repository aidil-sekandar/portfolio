export function filterArticles(allArticles, filterType, filterProp) {
  if (filterType === "recent") {
    return allArticles.sort((a, b) => Date.parse(b.data.pubDate) - Date.parse(a.data.pubDate));
  } else if (filterType === "oldest") {
    return allArticles.sort((a, b) => Date.parse(a.data.pubDate) - Date.parse(b.data.pubDate));
  } else if (filterType === "topic") {
    return allArticles.filter((article) => article.data.topics.includes(filterProp));
  } else if (filterType === "author") {
    return allArticles.filter((article) => article.data.author === filterProp);
  }
}