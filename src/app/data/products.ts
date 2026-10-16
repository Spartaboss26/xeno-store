export type Category = "Hoodies" | "Tees" | "Tops" | "More";

export const CATEGORIES: Category[] = ["Hoodies", "Tees", "Tops", "More"];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  category: Category;
  // ─────────────────────────────────────────────────────────
  // ADDING PRODUCTS (drip-feed friendly)
  // 1. Drop the product image into public/ (e.g. public/new-hoodie.png)
  // 2. Add one entry to the PRODUCTS array below:
  //    { id: "new-hoodie", name: "XENO New Hoodie", price: 55,
  //      image: "/new-hoodie.png", tagline: "Short line.",
  //      category: "Hoodies", checkoutUrl: "" }
  // Pick category from: "Hoodies" | "Tees" | "Tops" | "More"
  // The grid renders all entries automatically — no other changes needed.
  // ─────────────────────────────────────────────────────────
  // CHECKOUT URL SWAP POINT
  // Products are print-on-demand via Tapstitch. When Tapstitch
  // checkout/product URLs are ready, paste each one into its
  // product's `checkoutUrl` field below (keep the quotes).
  // Any product with a checkoutUrl set will link its Buy button
  // straight to Tapstitch instead of the order email.
  // DO NOT invent Tapstitch URLs — only use real ones.
  // ─────────────────────────────────────────────────────────────
  checkoutUrl: string;
}

const ORDER_EMAIL = "orriefoye6@gmail.com";

export function orderLink(productName: string): string {
  const subject = encodeURIComponent(`XENO order: ${productName}`);
  const body = encodeURIComponent(
    `Hi,\n\nI'd like to order:\n\n${productName}\n\nSize:\nQuantity:\n\nThanks!`
  );
  return `mailto:${ORDER_EMAIL}?subject=${subject}&body=${body}`;
}

export const PRODUCTS: Product[] = [
  {
    id: "streetwear-hoodie",
    name: "XENO Streetwear Heavyweight Hoodie",
    price: 55,
    image: "/streetwear-hoodie.png",
    tagline: "Heavyweight. Built for the cold unknown.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "oversize-fleeced-hoodie",
    name: "XENO Oversize Fleeced Hoodie",
    price: 48,
    image: "/oversize-fleeced-hoodie.png",
    tagline: "Oversized fit, fleeced inside. Maximum comfort.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "gdwd-hoodie",
    name: "XENO GDWD Heavyweight Hoodie",
    price: 60,
    image: "/gdwd-hoodie.png",
    tagline: "Go hard or go home. Our heaviest hitter.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "never-stop-tee",
    name: "XENO Never Stop Oversized T-Shirt",
    price: 35,
    image: "/never-stop-tee.png",
    tagline: "The mantra. Never stop.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "classic-tee",
    name: "XENO Classic T-Shirt",
    price: 32,
    image: "/classic-tee.png",
    tagline: "The original. Clean and essential.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "essential-cotton-tee",
    name: "XENO Essential Cotton T-Shirt",
    price: 30,
    image: "/essential-cotton-tee.png",
    tagline: "Everyday essential, alien standard.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "trust-process-tee",
    name: "XENO Trust The Process T-Shirt",
    price: 28,
    image: "/trust-process-tee.png",
    tagline: "Trust the process. The unknown rewards patience.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "essential-heavyweight-vest",
    name: "XENO Essential Heavyweight Vest",
    price: 58,
    image: "/essential-heavyweight-vest.png",
    tagline: "Sleeveless armor for the unknown.",
    category: "Tops",
    checkoutUrl: "",
  },
  {
    id: "snow-washed-raw-hem-tank",
    name: "XENO Snow Washed Raw-Hem Tank Top",
    price: 47,
    image: "/snow-washed-raw-hem-tank.png",
    tagline: "Raw edges. Washed in static.",
    category: "Tops",
    checkoutUrl: "",
  },
  {
    id: "vintage-wash-denim-jacket",
    name: "XENO Vintage Wash Denim Jacket",
    price: 94,
    image: "/vintage-wash-denim-jacket.png",
    tagline: "Denim from another dimension.",
    category: "More",
    checkoutUrl: "",
  },
  {
    id: "sun-fade-boxy-fur-hoodie",
    name: "XENO Sun Fade Boxy Fur Hoodie",
    price: 104,
    image: "/sun-fade-boxy-fur-hoodie.png",
    tagline: "Fur-trimmed. Signal-proof.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "xeno-kingdom-crew",
    name: "XENO Kingdom Crew Sweatshirt",
    price: 52,
    image: "/xeno-kingdom-crew.png",
    tagline: "Rep the kingdom.",
    category: "More",
    checkoutUrl: "",
  },
  {
    id: "never-stop-sun-dress",
    name: "XENO Never Stop Women's Sun Dress",
    price: 30,
    image: "/never-stop-sun-dress.png",
    tagline: "Never stop, even in sunlight.",
    category: "More",
    checkoutUrl: "",
  },
  {
    id: "define-your-own-hoodie",
    name: "XENO Define Your Own Heavyweight Hoodie",
    price: 56,
    image: "/define-your-own-hoodie.png",
    tagline: "Define your own. Heavyweight.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "womens-cropped-sports-bra",
    name: "XENO Women's Cropped Sports Bra",
    price: 61,
    image: "/womens-cropped-sports-bra.png",
    tagline: "Train like they're watching.",
    category: "Tops",
    checkoutUrl: "",
  },
  {
    id: "snow-washed-loose-hoodie",
    name: "XENO Snow Washed Loose Cotton Hoodie",
    price: 72,
    image: "/snow-washed-loose-hoodie.png",
    tagline: "Loose fit, heavy signal.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "vintage-washed-frayed-hoodie",
    name: "XENO Vintage Washed Frayed-Hem Hoodie",
    price: 80,
    image: "/vintage-washed-frayed-hoodie.png",
    tagline: "Frayed by the void.",
    category: "Hoodies",
    checkoutUrl: "",
  },
  {
    id: "trust-process-wide-leg-shorts",
    name: "XENO Trust The Process Wide Leg Shorts",
    price: 77,
    image: "/trust-process-wide-leg-shorts.png",
    tagline: "Trust the process, legs out.",
    category: "More",
    checkoutUrl: "",
  },
  {
    id: "staple-cotton-pullover",
    name: "XENO Staple Cotton Pullover",
    price: 32,
    image: "/staple-cotton-pullover.png",
    tagline: "The staple. 100% cotton.",
    category: "Tops",
    checkoutUrl: "",
  },
  {
    id: "essential-ribbed-tee",
    name: "XENO Essential Ribbed T-Shirt",
    price: 30,
    image: "/essential-ribbed-tee.png",
    tagline: "Ribbed. Essential. Alien-approved.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "boxy-net-tee",
    name: "XENO Boxy Net T-Shirt",
    price: 46,
    image: "/boxy-net-tee.png",
    tagline: "Net layer. Transmission visible.",
    category: "Tees",
    checkoutUrl: "",
  },
  {
    id: "performance-tee",
    name: "XENO Performance T-Shirt",
    price: 30,
    image: "/performance-tee.png",
    tagline: "Built to move.",
    category: "Tees",
    checkoutUrl: "",
  },
];
