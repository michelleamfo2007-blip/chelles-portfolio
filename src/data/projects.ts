import data from "./projects.json";

export type Project = {
  title: string;
  description: string;
  link: string;
  tags: string[];
  featured?: boolean;
  image?: string;
};

const normalizeLink = (link: string) =>
  link.trim().replace(/^https?:\/\//, "").replace(/\/$/, "");

export const projects: Project[] = (data.projects as Project[]).map((p) => ({
  ...p,
  link: normalizeLink(p.link),
  tags: p.tags ?? [],
}));

export const featuredProjects = projects.filter((p) => p.featured);

export const allProjectTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort((a, b) => a.localeCompare(b));

/** Live homepage screenshot (or optional local/override image). */
export function projectPreviewUrl(link: string, image?: string): string {
  if (image) return image;
  const url = `https://${normalizeLink(link)}`;
  return `https://v1.screenshot.11ty.dev/${encodeURIComponent(url)}/opengraph/`;
}
