export type Category = "Hoodies" | "Tees" | "Tops" | "Pants" | "Women";

export const CATEGORIES: Category[] = ["Hoodies", "Tees", "Tops", "Pants", "Women"];

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  category: Category;
  colors?: string[];
  sizes?: string[];
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

const ORDER_EMAIL = "orrie@xenostreetware.ca";

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
    checkoutUrl: "https://buy.stripe.com/00w9AM0bubHU9XL2sWdwc00",
  },
  {
    id: "oversize-fleeced-hoodie",
    name: "XENO Oversize Fleeced Hoodie",
    price: 48,
    image: "/oversize-fleeced-hoodie.png",
    tagline: "Oversized fit, fleeced inside. Maximum comfort.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/4gM5kw7DWbHU6LzaZsdwc01",
    colors: ["White", "Oat Gray", "Flower Gray", "Gray Apricot", "Dark Purple", "Medium Blue", "Medium Green", "Klein Blue", "Gray Coffee", "Gray", "Brown", "Navy Blue", "Coffee", "Eden Green", "Black"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: "gdwd-hoodie",
    name: "XENO GDWD Heavyweight Hoodie",
    price: 60,
    image: "/gdwd-hoodie.png",
    tagline: "Go hard or go home. Our heaviest hitter.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/9B64gs4rK8vIc5T9Vodwc02",
  },
  {
    id: "never-stop-tee",
    name: "XENO Never Stop Oversized T-Shirt",
    price: 35,
    image: "/never-stop-tee.png",
    tagline: "The mantra. Never stop.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/cNi8wI2jC5jw6LzffIdwc03",
  },
  {
    id: "classic-tee",
    name: "XENO Classic T-Shirt",
    price: 32,
    image: "/classic-tee.png",
    tagline: "The original. Clean and essential.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/5kQ3co6zS7rE5HvebEdwc04",
  },
  {
    id: "essential-cotton-tee",
    name: "XENO Essential Cotton T-Shirt",
    price: 30,
    image: "/essential-cotton-tee.png",
    tagline: "Everyday essential, alien standard.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/8x23co6zSfYa5Hv1oSdwc05",
  },
  {
    id: "trust-process-tee",
    name: "XENO Trust The Process T-Shirt",
    price: 28,
    image: "/trust-process-tee.png",
    tagline: "Trust the process. The unknown rewards patience.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/3cI3coe2k8vIee1aZsdwc06",
  },
  {
    id: "essential-heavyweight-vest",
    name: "XENO Essential Heavyweight Vest",
    price: 58,
    image: "/essential-heavyweight-vest.png",
    tagline: "Sleeveless armor for the unknown.",
    category: "Tops",
    checkoutUrl: "https://buy.stripe.com/dRm14ge2keU6fi56Jcdwc07",
  },
  {
    id: "snow-washed-raw-hem-tank",
    name: "XENO Snow Washed Raw-Hem Tank Top",
    price: 47,
    image: "/snow-washed-raw-hem-tank.png",
    tagline: "Raw edges. Washed in static.",
    category: "Tops",
    checkoutUrl: "https://buy.stripe.com/28EaEQf6o27k7PD2sWdwc08",
  },
  {
    id: "vintage-wash-denim-jacket",
    name: "XENO Vintage Wash Denim Jacket",
    price: 94,
    image: "/vintage-wash-denim-jacket.png",
    tagline: "Denim from another dimension.",
    category: "Tops",
    checkoutUrl: "https://buy.stripe.com/5kQaEQf6o3boc5T5F8dwc09",
  },
  {
    id: "sun-fade-boxy-fur-hoodie",
    name: "XENO Sun Fade Boxy Fur Hoodie",
    price: 104,
    image: "/sun-fade-boxy-fur-hoodie.png",
    tagline: "Fur-trimmed. Signal-proof.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/3cIcMY0buh2eb1PebEdwc0a",
  },
  {
    id: "xeno-kingdom-crew",
    name: "XENO Kingdom Crew Sweatshirt",
    price: 52,
    image: "/xeno-kingdom-crew.png",
    tagline: "Rep the kingdom.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/8x228kaQ8eU60nb7Ngdwc0b",
  },
  {
    id: "never-stop-sun-dress",
    name: "XENO Never Stop Women's Sun Dress",
    price: 30,
    image: "/never-stop-sun-dress.png",
    tagline: "Never stop, even in sunlight.",
    category: "Women",
    checkoutUrl: "https://buy.stripe.com/8x29AM1fyaDQb1P6Jcdwc0c",
  },
  {
    id: "define-your-own-hoodie",
    name: "XENO Define Your Own Heavyweight Hoodie",
    price: 56,
    image: "/define-your-own-hoodie.png",
    tagline: "Define your own. Heavyweight.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/9B6dR2bUccLY4Drc3wdwc0d",
  },
  {
    id: "womens-cropped-sports-bra",
    name: "XENO Women's Cropped Sports Bra",
    price: 61,
    image: "/womens-cropped-sports-bra.png",
    tagline: "Train like they're watching.",
    category: "Women",
    checkoutUrl: "https://buy.stripe.com/00w9AM8I0fYa2vjffIdwc0e",
  },
  {
    id: "snow-washed-loose-hoodie",
    name: "XENO Snow Washed Loose Cotton Hoodie",
    price: 72,
    image: "/snow-washed-loose-hoodie.png",
    tagline: "Loose fit, heavy signal.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/5kQdR20bu4fs0nbc3wdwc0f",
  },
  {
    id: "vintage-washed-frayed-hoodie",
    name: "XENO Vintage Washed Frayed-Hem Hoodie",
    price: 80,
    image: "/vintage-washed-frayed-hoodie.png",
    tagline: "Frayed by the void.",
    category: "Hoodies",
    checkoutUrl: "https://buy.stripe.com/aFaaEQ9M4aDQ8THd7Adwc0g",
    colors: ["Black", "Blue", "Gray"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
  {
    id: "trust-process-wide-leg-shorts",
    name: "XENO Trust The Process Wide Leg Shorts",
    price: 77,
    image: "/trust-process-wide-leg-shorts.png",
    tagline: "Trust the process, legs out.",
    category: "Pants",
    checkoutUrl: "https://buy.stripe.com/cNi3co1fyaDQ0nb1oSdwc0h",
  },
  {
    id: "staple-cotton-pullover",
    name: "XENO Staple Cotton Pullover",
    price: 32,
    image: "/staple-cotton-pullover.png",
    tagline: "The staple. 100% cotton.",
    category: "Tops",
    checkoutUrl: "https://buy.stripe.com/28EdR20bu9zM7PDffIdwc0i",
  },
  {
    id: "essential-ribbed-tee",
    name: "XENO Essential Ribbed T-Shirt",
    price: 30,
    image: "/essential-ribbed-tee.png",
    tagline: "Ribbed. Essential. Alien-approved.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/3cIcMY0buaDQ3zn4B4dwc0j",
    colors: ["White"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "boxy-net-tee",
    name: "XENO Boxy Net T-Shirt",
    price: 46,
    image: "/boxy-net-tee.png",
    tagline: "Net layer. Transmission visible.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/14A9AMcYgcLY2vj5F8dwc0k",
    colors: ["Black"],
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: "performance-tee",
    name: "XENO Performance T-Shirt",
    price: 30,
    image: "/performance-tee.png",
    tagline: "Built to move.",
    category: "Tees",
    checkoutUrl: "https://buy.stripe.com/aFaaEQaQ87rEfi58Rkdwc0l",
    colors: ["Black", "Flecking Gray", "White"],
    sizes: ["S", "M", "L", "XL", "2XL"]
  },
];
