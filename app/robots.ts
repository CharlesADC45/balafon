import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/portal", "/login", "/console/"],
    },
    sitemap: "https://balafon.africadigitalconnect.net/sitemap.xml",
  };
}
