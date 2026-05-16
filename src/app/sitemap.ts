import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://sparkvr-ten.vercel.app";
  const now = new Date();

  return [
    { url: `${baseUrl}/`,                  lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${baseUrl}/about`,             lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/schools`,           lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/teachers`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/subject-expansion`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/timetable`,         lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/subjects`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/services`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/blog`,              lastModified: now, changeFrequency: "weekly",  priority: 0.7 },
    { url: `${baseUrl}/contact`,           lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${baseUrl}/case-studies`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${baseUrl}/help`,              lastModified: now, changeFrequency: "yearly",  priority: 0.5 },
  ];
}
