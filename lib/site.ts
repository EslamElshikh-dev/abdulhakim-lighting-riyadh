// Public details checked against the managed Google Business Profile.
// Keep the verification address private; never add it to public source.
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
  hoursLabel: "متاح على مدار الساعة",
  description: "عبدالحكيم للكهرباء والإنارة الحديثة: خدمات الكهرباء والإنارة الداخلية والخارجية ومستلزمات الكهرباء في مدينة الرياض. تواصل على 0532305309 لتوضيح احتياجك وتنسيق الخدمة.",
} as const;

export const siteUrl = (process.env.SITE_URL || "https://abdulhakim-lighting-riyadh.vercel.app").replace(/\/+$/, "");
export const businessId = `${siteUrl}/#business`;
export const websiteId = `${siteUrl}/#website`;
export const serviceArea = {
  "@type": "City",
  name: site.city,
  containedInPlace: { "@type": "Country", name: "المملكة العربية السعودية" },
} as const;
export const openingHours = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "00:00",
  closes: "23:59",
};

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
        contactType: "خدمة العملاء",
        availableLanguage: "Arabic",
        areaServed: "SA",
        hoursAvailable: openingHours,
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
  ],
};
