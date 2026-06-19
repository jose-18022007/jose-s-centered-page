import candle from "@/assets/cat-candle.jpg";
import chocolate from "@/assets/cat-chocolate.jpg";
import bouquet from "@/assets/cat-bouquet.jpg";
import hamper from "@/assets/cat-hamper.jpg";
import corporate from "@/assets/cat-corporate.jpg";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

export const IMG = { candle, chocolate, bouquet, hamper, corporate, hero1, hero2, about1, about2 };

export const occasions = [
  { name: "Wedding Gifts", desc: "Bespoke favours & hampers", img: hamper },
  { name: "Baby Shower Gifts", desc: "Sweet beginnings, beautifully boxed", img: chocolate },
  { name: "Birthday Gifts", desc: "Make their day unforgettable", img: bouquet },
  { name: "Anniversary Gifts", desc: "Romance, candle-lit and gilded", img: candle },
  { name: "Corporate Gifts", desc: "Premium client & team gifting", img: corporate },
  { name: "Return Gifts", desc: "Tokens guests will treasure", img: hero2 },
  { name: "Festival Gifts", desc: "Diwali, Christmas & more", img: hero1 },
];

export const collections = [
  { id: "candles", name: "Soy Wax Candles", img: candle, tag: "Bestseller", desc: "Hand-poured pure soy wax candles in our signature scents." },
  { id: "chocolates", name: "Artisan Chocolates", img: chocolate, tag: "50+ Varieties", desc: "Premium handcrafted chocolates including kunafa & truffles." },
  { id: "bouquets", name: "Fresh Bouquets", img: bouquet, tag: "Fresh Daily", desc: "Stunning flower & chocolate bouquets, made to order." },
  { id: "hampers", name: "Gift Hampers", img: hamper, tag: "Customizable", desc: "Curated luxury hampers for every special occasion." },
  { id: "corporate", name: "Corporate Gifts", img: corporate, tag: "Bulk Friendly", desc: "Branded gifting solutions for teams & clients." },
];

export const products = [
  { name: "Rose Garden Soy Candle", cat: "Candles", img: candle, price: 549, badge: "Bestseller" },
  { name: "Dark Praline Box (12pcs)", cat: "Chocolates", img: chocolate, price: 899, badge: "Most Loved" },
  { name: "Blush Rose Bouquet", cat: "Bouquets", img: bouquet, price: 1299, badge: "" },
  { name: "Wedding Welcome Hamper", cat: "Hampers", img: hamper, price: 2499, badge: "New Arrival" },
  { name: "Corporate Signature Box", cat: "Corporate", img: corporate, price: 1899, badge: "" },
  { name: "Vanilla Bean Pillar Candle", cat: "Candles", img: hero1, price: 699, badge: "" },
  { name: "Kunafa Chocolate Bar", cat: "Chocolates", img: hero2, price: 449, badge: "New Arrival" },
  { name: "Baby Shower Treasure Box", cat: "Hampers", img: about2, price: 1799, badge: "Most Loved" },
];

export const testimonials = [
  { name: "Farina Myrtle Renato", role: "Wedding Client", text: "Absolutely magical. Every candle and chocolate looked like a little piece of art. Our wedding guests are still talking about the favours." },
  { name: "Flora Jency Norbert", role: "Bride", text: "Riaa created the most thoughtful, beautifully packaged hampers for our wedding. The care and craftsmanship shows in every detail." },
  { name: "Pavithra Gayathri", role: "Birthday Gift Buyer", text: "I have ordered three times now. The chocolates are divine and the bouquets always arrive looking fresh and stunning." },
  { name: "Ashiq", role: "Corporate Buyer", text: "We ordered bulk corporate gifts for our team. Premium quality, on-time delivery, and the personalization was perfect." },
  { name: "Shama Khan", role: "Baby Shower Host", text: "The baby shower return gifts were a complete hit. Each box felt curated with so much love. Truly handcrafted with heart." },
  { name: "Anitha R.", role: "Anniversary Gift", text: "My husband cried when he opened the hamper. The little handwritten note and the candle scent were just perfect." },
];

export const faqs = [
  { cat: "Orders", q: "How do I place an order?", a: "Simply WhatsApp us with your requirements — occasion, quantity, budget — and we'll craft a custom proposal. No website checkout needed." },
  { cat: "Orders", q: "Do you have a minimum order quantity?", a: "No minimum for retail orders. For bulk orders we offer special pricing starting from 25+ units." },
  { cat: "Products", q: "What kind of wax do you use?", a: "100% pure soy wax — clean burning, eco-friendly, and safe for your home and family." },
  { cat: "Products", q: "Are your chocolates handmade?", a: "Yes, every single chocolate is handcrafted in our Coonoor kitchen using premium ingredients." },
  { cat: "Customization", q: "Can I customize colors, scents and packaging?", a: "Absolutely. Custom design is at the heart of what we do. Send us your inspiration and we'll bring it to life." },
  { cat: "Customization", q: "Can you add personalized messages or tags?", a: "Yes — every order includes a complimentary custom tag with a message of your choice." },
  { cat: "Delivery", q: "Do you ship across India?", a: "Yes, we ship pan-India through trusted courier partners. Local Coonoor & Nilgiris delivery available." },
  { cat: "Delivery", q: "How long does delivery take?", a: "Standard orders ship within 3-5 business days. Custom orders typically take 7-10 days." },
  { cat: "Bulk", q: "Do you do wedding favours?", a: "Yes — weddings are one of our specialties. We can craft anywhere from 50 to 500+ favours." },
  { cat: "Bulk", q: "Do you offer corporate gifting?", a: "Yes, we offer fully branded corporate gifting with custom packaging and bulk discounts." },
];

export const galleryImgs = [candle, chocolate, bouquet, hamper, corporate, hero1, hero2, about1, about2, candle, chocolate, bouquet];
