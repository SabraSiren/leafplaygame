import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (typeof process.env.VERCEL_URL === "string" ? `https://${process.env.VERCEL_URL}` : undefined);

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    ...(baseUrl && { sitemap: `${baseUrl}/sitemap.xml` }),
  };
}
