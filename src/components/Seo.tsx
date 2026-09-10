import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  SITE_AUTHOR,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_OG_IMAGE,
  SITE_TWITTER,
  SITE_URL,
  absoluteUrl,
  getPageSeo,
} from "../lib/seo";

function setMeta(
  attr: "name" | "property",
  key: string,
  content: string
) {
  let el = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${key}"]`
  );
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]'
  );
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export function Seo() {
  const { pathname } = useLocation();
  const page = getPageSeo(pathname);
  const url = absoluteUrl(page.path);

  useEffect(() => {
    document.title = page.title;

    setMeta("name", "description", page.description);
    setMeta("name", "author", SITE_AUTHOR);
    setMeta("name", "keywords", SITE_KEYWORDS);
    setMeta("name", "robots", "index, follow, max-image-preview:large");
    setMeta("name", "googlebot", "index, follow");

    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", SITE_NAME);
    setMeta("property", "og:locale", "en_US");
    setMeta("property", "og:url", url);
    setMeta("property", "og:title", page.title);
    setMeta("property", "og:description", page.description);
    setMeta("property", "og:image", SITE_OG_IMAGE);

    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:url", url);
    setMeta("name", "twitter:title", page.title);
    setMeta("name", "twitter:description", page.description);
    setMeta("name", "twitter:image", SITE_OG_IMAGE);
    setMeta("name", "twitter:site", SITE_TWITTER);

    setCanonical(url);

    const verification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as
      | string
      | undefined;
    if (verification) {
      setMeta("name", "google-site-verification", verification);
    }
  }, [page.description, page.path, page.title, url]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": `${SITE_URL}/#website`,
              url: SITE_URL,
              name: SITE_NAME,
              description: page.description,
              publisher: { "@id": `${SITE_URL}/#person` },
              inLanguage: "en",
            },
            {
              "@type": "Person",
              "@id": `${SITE_URL}/#person`,
              name: SITE_AUTHOR,
              alternateName: "Dev with Mercedes",
              url: SITE_URL,
              jobTitle: "Full Stack Engineer",
              email: "mailto:devwithmercedes@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Accra",
                addressCountry: "GH",
              },
              sameAs: [
                "https://github.com/michelleamfo2007-blip",
                "https://www.linkedin.com/in/michelle-amfo-906243409",
                "https://www.tiktok.com/@devwithmercedes",
              ],
            },
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: page.title,
              description: page.description,
              isPartOf: { "@id": `${SITE_URL}/#website` },
              about: { "@id": `${SITE_URL}/#person` },
              inLanguage: "en",
            },
          ],
        }),
      }}
    />
  );
}
