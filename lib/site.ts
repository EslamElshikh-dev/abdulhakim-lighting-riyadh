// Public details checked against the managed Google Business Profile.
// Keep the verification address private; never add it to public source.
import { collections } from "@/lib/collections";

export const site = {
  name: "عبدالحكيم للكهرباء والإنارة الحديثة",
  shortName: "عبدالحكيم",
  city: "الرياض",
  region: "منطقة الرياض",
  serviceArea: "مدينة الرياض",
  phone: "+966532305309",
  phoneDisplay: "0532305309",
  telephoneUrl: "tel:+966532305309",
  whatsappUrl: "https://wa.me/966532305309",
  hoursLabel: "على مدار الساعة عدا الجمعة",
  hoursDescription: "متاح على مدار الساعة من السبت إلى الخميس، والجمعة مغلق. موعد التنفيذ يُنسَّق عند التواصل.",
  description: "عبدالحكيم للكهرباء والإنارة الحديثة: خدمات تأسيس الكهرباء والإنارة الداخلية والخارجية في مدينة الرياض. تواصل على 0532305309. متاح على مدار الساعة من السبت إلى الخميس، والجمعة مغلق.",
} as const;

export const siteUrl = (process.env.SITE_URL || "https://abdulhakim-lighting-riyadh.vercel.app").replace(/\/+$/, "");
export const businessId = `${siteUrl}/#business`;
export const websiteId = `${siteUrl}/#website`;
export const socialImage = {
  "@type": "ImageObject",
  "@id": `${siteUrl}/#primaryimage`,
  url: `${siteUrl}/social-card.png`,
  contentUrl: `${siteUrl}/social-card.png`,
  width: 1200,
  height: 630,
  caption: site.name,
} as const;
export const serviceArea = {
  "@type": "City",
  name: site.city,
  containedInPlace: { "@type": "Country", name: "المملكة العربية السعودية" },
} as const;
export const openingHours = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "00:00",
    closes: "23:59",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: "Friday",
    opens: "00:00",
    closes: "00:00",
  },
];

export const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Electrician",
      "@id": businessId,
      name: site.name,
      description: site.description,
      url: `${siteUrl}/`,
      telephone: site.phone,
      logo: { "@type": "ImageObject", url: `${siteUrl}/icon.svg`, width: 64, height: 64 },
      image: { "@id": socialImage["@id"] },
      // City-level public information for a service-area business.
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "SA",
      },
      areaServed: serviceArea,
      openingHoursSpecification: openingHours,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phone,
        url: site.whatsappUrl,
        contactType: "خدمة العملاء",
        availableLanguage: "Arabic",
        areaServed: serviceArea,
        hoursAvailable: openingHours,
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "مجالات الكهرباء والإنارة",
        itemListElement: collections.map((item) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            "@id": `${siteUrl}/collections/${item.slug}#service`,
            name: item.title,
            serviceType: item.shortTitle,
            description: item.description,
            url: `${siteUrl}/collections/${item.slug}`,
            provider: { "@id": businessId },
            areaServed: serviceArea,
          },
        })),
      },
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${siteUrl}/`,
      name: site.name,
      inLanguage: "ar-SA",
      publisher: { "@id": businessId },
    },
    socialImage,
  ],
};

