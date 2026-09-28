import type { CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"posts">;

export function sortPosts(posts: Post[]) {
  return [...posts].sort(
    (a, b) => b.data.publishedAt.valueOf() - a.data.publishedAt.valueOf()
  );
}

export function getPostPath(post: Post) {
  return `/articles/${post.id}/`;
}

export function tagToSlug(tag: string) {
  return tag
    .trim()
    .toLocaleLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "");
}

export function collectTags(posts: Post[]) {
  const tags = new Map<string, { label: string; count: number }>();

  for (const post of posts) {
    for (const tag of post.data.tags) {
      const slug = tagToSlug(tag);
      const current = tags.get(slug);
      tags.set(slug, {
        label: current?.label ?? tag,
        count: (current?.count ?? 0) + 1
      });
    }
  }

  return [...tags.entries()]
    .map(([slug, value]) => ({ slug, ...value }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

