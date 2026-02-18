import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import fs from "node:fs/promises";
import path from "node:path";

function slugify(value) {
  return value
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function isValidDateString(date) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parsed = new Date(`${date}T00:00:00Z`);
  return !Number.isNaN(parsed.getTime()) && parsed.toISOString().startsWith(date);
}

function parseTags(tagsInput) {
  if (!tagsInput.trim()) return [];
  return tagsInput
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function quoteYamlString(value) {
  return `"${String(value).replace(/"/g, '\\"')}"`;
}

async function main() {
  const rl = createInterface({ input, output });

  try {
    const title = (await rl.question("Title: ")).trim();
    if (!title) {
      console.error("Title is required.");
      process.exit(1);
    }

    const pubDate = (await rl.question("Publish date (YYYY-MM-DD): ")).trim();
    if (!isValidDateString(pubDate)) {
      console.error("Invalid date. Use format YYYY-MM-DD.");
      process.exit(1);
    }

    const tagsInput = await rl.question("Tags (comma separated): ");
    const tags = parseTags(tagsInput);

    const year = pubDate.slice(0, 4);
    const fallbackSlug = slugify(title);
    const defaultFeaturedImage = `/assets/article/featuredImages/${year}/${fallbackSlug}.webp`;

    const featuredImageInput = (
      await rl.question(`Featured image path or filename (default: ${defaultFeaturedImage}): `)
    ).trim();

    const featuredImage = !featuredImageInput
      ? defaultFeaturedImage
      : featuredImageInput.startsWith("/")
        ? featuredImageInput
        : `/assets/article/featuredImages/${year}/${featuredImageInput}`;

    const description = (await rl.question("Description: ")).trim();
    if (!description) {
      console.error("Description is required.");
      process.exit(1);
    }

    const contentDir = path.join(process.cwd(), "src", "content", "article", year);
    await fs.mkdir(contentDir, { recursive: true });

    const filename = `${fallbackSlug}.md`;
    const filepath = path.join(contentDir, filename);

    try {
      await fs.access(filepath);
      console.error(`File already exists: ${filepath}`);
      process.exit(1);
    } catch {
      // File does not exist; continue.
    }

    const tagsYaml = `[${tags.map(quoteYamlString).join(", ")}]`;
    const content = `---
title: ${quoteYamlString(title)}
pubDate: ${pubDate}
tags: ${tagsYaml}
featuredImage: ${quoteYamlString(featuredImage)}
description: ${quoteYamlString(description)}
---

Write your article here.
`;

    await fs.writeFile(filepath, content, "utf8");

    console.log("\nArticle created successfully:");
    console.log(path.relative(process.cwd(), filepath));
  } finally {
    rl.close();
  }
}

main().catch((err) => {
  console.error("Failed to create article:", err);
  process.exit(1);
});

