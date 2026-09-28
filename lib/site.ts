export const site = {
  name: "عبدالحكيم للكهرباء والإنارة الحديثة",
  shortName: "عبدالحكيم",
  address: "2870 شارع الخطابة، 6217، حي الفلاح، الرياض 13314، المملكة العربية السعودية",
  addressShort: "شارع الخطابة، حي الفلاح، الرياض",
  maps: "https://maps.app.goo.gl/zAAQSDnWa8PbWfQQ9?g_st=ac",
  // يُضاف الرقم فقط بعد التحقق منه من صاحب النشاط أو ملفه التجاري.
  phone: null as string | null,
  whatsapp: null as string | null,
} as const;

export const siteUrl = (process.env.SITE_URL || "https://abdulhakim-lighting-riyadh.vercel.app").replace(/\/$/, "");

export const graph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": `${siteUrl}/#business`,
      name: site.name,
      description: "عبدالحكيم للكهرباء والإنارة الحديثة في حي الفلاح بالرياض. تعرّف على مجالات الكهرباء والإنارة وموقع النشاط.",
      url: siteUrl,
      hasMap: site.maps,
      address: {
        "@type": "PostalAddress",
        streetAddress: "2870 شارع الخطابة، 6217، حي الفلاح",
        addressLocality: "الرياض",
        addressRegion: "الرياض",
        postalCode: "13314",
        addressCountry: "SA"
      },
      areaServed: { "@type": "City", name: "الرياض" }
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      inLanguage: "ar-SA",
      publisher: { "@id": `${siteUrl}/#business` }
    }
  ]
};
