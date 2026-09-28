export const site = {
  name: "عبدالحكيم للكهرباء والإنارة الحديثة",
  shortName: "عبدالحكيم",
  address: "2870 شارع الخطابة، 6217، الفلاح، الرياض 13314",
  addressShort: "شارع الخطابة، الفلاح، الرياض",
  streetAddress: "2870 شارع الخطابة، 6217، الفلاح",
  city: "الرياض",
  postalCode: "13314",
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
        streetAddress: site.streetAddress,
        addressLocality: site.city,
        addressRegion: site.city,
        postalCode: site.postalCode,
        addressCountry: "SA"
      }
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
