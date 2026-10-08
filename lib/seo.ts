import type { Metadata } from "next";
import { businessId, site, siteUrl, socialImage, websiteId } from "@/lib/site";

export function pageMetadata(path: string, title: string, description: string): Metadata {
  const url = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website", locale: "ar_SA", siteName: site.name, url,
      title: `${title} | ${site.shortName}`, description,
      images: [{ url: socialImage.url, width: socialImage.width, height: socialImage.height, alt: site.name }],
    },
    twitter: { card: "summary_large_image", title: `${title} | ${site.shortName}`, description, images: [socialImage.url] },
  };
}

export function pageGraph(
  path: string, title: string, description: string, type = "WebPage",
  mainEntity: unknown = { "@id": businessId },
  breadcrumbName: string = title,
) {
  const url = `${siteUrl}${path}`;
  const breadcrumbId = `${url}#breadcrumb`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": type, "@id": `${url}#webpage`, url, name: title, description,
        inLanguage: "ar-SA", isPartOf: { "@id": websiteId },
        primaryImageOfPage: { "@id": socialImage["@id"] },
        about: { "@id": businessId }, mainEntity,
        ...(path === "/" ? {} : { breadcrumb: { "@id": breadcrumbId } }),
      },
      ...(path === "/" ? [] : [{
        "@type": "BreadcrumbList", "@id": breadcrumbId,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "الرئيسية", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: breadcrumbName, item: url },
        ],
      }]),
    ],
  };
}
