export const SITE = {
  brand: "Riaa",
  full: "Riaa Candles & Chocolates",
  tagline: "Handcrafted with Love. Gifted with Grace.",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210",
  email: "hello@riaacandles.com",
  address: "Coonoor, Tamil Nadu, India",
  hours: "Mon – Sat: 9AM – 7PM",
  instagram: "https://instagram.com/riaacandles",
  instagramHandle: "@riaacandles",
  rating: "5.0",
  reviewCount: "70+",
};

export function wa(message = "Hi Riaa Candles! I'd love to know more about your handcrafted gifts.") {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
