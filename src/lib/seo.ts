export const SITE_URL = "https://devwithmercedes.site";
export const SITE_NAME = "Dev with Mercedes";
export const SITE_TITLE_DEFAULT =
  "Dev with Mercedes | Full Stack Engineer & Digital Architect";
export const SITE_DESCRIPTION =
  "Portfolio of Michelle Nhyira Amfo (Dev with Mercedes) — full-stack engineer in Accra, Ghana. Projects in e-commerce, campus tech, SaaS, and high-performance web apps.";
export const SITE_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const SITE_TWITTER = "@devwithmercedes";
export const SITE_AUTHOR = "Michelle Nhyira Amfo";
export const SITE_KEYWORDS = [
  "Michelle Amfo",
  "Dev with Mercedes",
  "Full Stack Developer",
  "Software Engineer Accra",
  "React Developer Ghana",
  "Next.js",
  "E-commerce developer",
  "SmartAttend",
  "Shopora",
  "KlarElle",
].join(", ");

export type PageSeo = {
  title: string;
  description: string;
  path: string;
};

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    path: "/",
  },
  "/work": {
    title: `Work & Projects | ${SITE_NAME}`,
    description:
      "Selected projects by Michelle Amfo — SmartAttend, KlarElle, Shopora, and more full-stack product work.",
    path: "/work",
  },
  "/skills": {
    title: `Skills & Stack | ${SITE_NAME}`,
    description:
      "Frontend, backend, and DevOps skills — React, Next.js, TypeScript, APIs, and cloud-native delivery.",
    path: "/skills",
  },
  "/about": {
    title: `About Michelle | ${SITE_NAME}`,
    description:
      "Meet Michelle Nhyira Amfo (Dev with Mercedes) — full-stack engineer focused on performance, design, and scalable systems.",
    path: "/about",
  },
  "/contact": {
    title: `Contact | ${SITE_NAME}`,
    description:
      "Get in touch with Michelle Amfo for freelance projects, collaborations, or full-time engineering roles.",
    path: "/contact",
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return pageSeo[pathname] ?? {
    title: SITE_TITLE_DEFAULT,
    description: SITE_DESCRIPTION,
    path: pathname,
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
