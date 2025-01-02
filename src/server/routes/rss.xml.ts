import type { ParsedContent } from "@nuxt/content";
import { serverQueryContent } from "#content/server";
import { SITE_TITLE, SITE_URL, SOCIAL_INFO_LIST } from "@/utils/constants";
import RSS from "rss";

export default defineEventHandler(async (event) => {
  const blogPostList = (await serverQueryContent(event)
    .sort({ date: -1 })
    .find()) as ParsedContent[];

  const feed = new RSS({
    title: SITE_TITLE,
    site_url: SITE_URL,
    feed_url: SOCIAL_INFO_LIST.rss.url,
  });

  for (const blogPost of blogPostList) {
    feed.item({
      title: blogPost.title || "",
      description: blogPost.description || "",
      date: blogPost.date,
      url: `${SITE_URL}${blogPost._path}`,
    });
  }

  setHeaders(event, { "Content-Type": "application/rss+xml" });

  return feed.xml();
});
