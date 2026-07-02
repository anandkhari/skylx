import { getSiteUrl } from "./seo";

export default function sitemap() {
  const siteUrl = getSiteUrl();
  const lastModified = new Date();

  return [
    { url: siteUrl,                    lastModified, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${siteUrl}/services`,      lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/contact`,       lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/spices`,        lastModified, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/cardamom`,      lastModified, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${siteUrl}/pepper`,        lastModified, changeFrequency: "weekly",  priority: 0.9 },
  ];
}
