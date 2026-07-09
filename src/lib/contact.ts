export const contact = {
  name: "Slotenmaker Luc",
  street: "Diestsestraat 42",
  postalCode: "3000",
  city: "Leuven",
  country: "België",
  phone: "+32 16 12 34 56",
  phoneHref: "tel:+3216123456",
  email: "info@slotenmakerluc.be",
  emailHref: "mailto:info@slotenmakerluc.be",
  // Approximate coordinates for Diestsestraat, Leuven (fictitious business).
  geo: {
    lat: 50.8817,
    lng: 4.7039,
  },
} as const;

// OpenStreetMap embed (no API key required). bbox roughly around Leuven centre.
export const osmEmbedSrc =
  "https://www.openstreetmap.org/export/embed.html?bbox=4.6939%2C50.8757%2C4.7139%2C50.8877&layer=mapnik&marker=50.8817%2C4.7039";

export const osmLinkHref =
  "https://www.openstreetmap.org/?mlat=50.8817&mlon=4.7039#map=17/50.8817/4.7039";
