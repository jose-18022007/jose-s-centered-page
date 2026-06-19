import { IMG } from "./content";

export type OccasionConfig = {
  slug: string;
  name: string;
  label: string;
  titleLead: string;
  titleEm: string;
  desc: string;
  heroImg: string;
  waMessage: string;
  productCats?: string[];
};

export const OCCASIONS: Record<string, OccasionConfig> = {
  "wedding-gifts": {
    slug: "wedding-gifts",
    name: "Wedding Gifts",
    label: "WEDDING GIFTS",
    titleLead: "Gifts Made for Your",
    titleEm: "Special Day",
    desc: "From welcome hampers to favours your guests will treasure — every piece is handcrafted to match the love story you're celebrating. Bespoke colors, scents, and packaging to weave into your wedding palette.",
    heroImg: IMG.hamper,
    waMessage:
      "Hi Riaa Candles! I am looking for Wedding Gift options. Could you please share your catalog and pricing?",
  },
  "baby-shower-gifts": {
    slug: "baby-shower-gifts",
    name: "Baby Shower Gifts",
    label: "BABY SHOWER GIFTS",
    titleLead: "Sweet Beginnings,",
    titleEm: "Beautifully Boxed",
    desc: "Soft pastels, gentle scents and the daintiest little treasures — curated to welcome a new life with love. Personalized for parents-to-be and unforgettable for guests.",
    heroImg: IMG.chocolate,
    waMessage:
      "Hi Riaa Candles! I am looking for Baby Shower Gift options. Could you share your catalog?",
  },
  "birthday-gifts": {
    slug: "birthday-gifts",
    name: "Birthday Gifts",
    label: "BIRTHDAY GIFTS",
    titleLead: "Make Their Day",
    titleEm: "Unforgettable",
    desc: "Hand-tied bouquets, artisan chocolates, and signature scented candles — wrapped with a handwritten note that makes the moment theirs forever.",
    heroImg: IMG.bouquet,
    waMessage:
      "Hi Riaa Candles! I need Birthday Gift ideas. Could you share what you have?",
  },
  "anniversary-gifts": {
    slug: "anniversary-gifts",
    name: "Anniversary Gifts",
    label: "ANNIVERSARY GIFTS",
    titleLead: "Romance,",
    titleEm: "Candle-lit & Gilded",
    desc: "Soft glowing soy wax candles, hand-tempered chocolates and lush blush bouquets — designed to relive your favourite love story with every detail.",
    heroImg: IMG.candle,
    waMessage:
      "Hi Riaa Candles! Looking for Anniversary Gift options. Please share suggestions and pricing.",
  },
  "corporate-gifts": {
    slug: "corporate-gifts",
    name: "Corporate Gifts",
    label: "CORPORATE GIFTS",
    titleLead: "Premium Gifting",
    titleEm: "Done Right",
    desc: "Thoughtful, branded gifting your clients and teams will actually love. Bulk-friendly, fully customisable, and delivered on time — every time.",
    heroImg: IMG.corporate,
    waMessage:
      "Hi Riaa Candles! We need Corporate Gift solutions. Please share bulk pricing and catalog.",
  },
  "return-gifts": {
    slug: "return-gifts",
    name: "Return Gifts",
    label: "RETURN GIFTS",
    titleLead: "Tokens Your Guests",
    titleEm: "Will Treasure",
    desc: "Little parcels of love — designed in bulk yet packed with personal touches. From mini candles to chocolate boxes, every return gift becomes a keepsake.",
    heroImg: IMG.hero2,
    waMessage:
      "Hi Riaa Candles! I am looking for Return Gift options. Could you share your catalog?",
  },
  "festival-gifts": {
    slug: "festival-gifts",
    name: "Festival Gifts",
    label: "FESTIVAL GIFTS",
    titleLead: "Celebrate with",
    titleEm: "Handcrafted Joy",
    desc: "Diwali, Christmas, Eid and every joyful festival in between — gifted with hand-poured candles, artisan chocolates and curated hampers that feel like a hug.",
    heroImg: IMG.hero1,
    waMessage:
      "Hi Riaa Candles! Looking for Festival Gift ideas. Please share what you have.",
  },
};
