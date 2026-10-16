export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  // ─────────────────────────────────────────────────────────
  // ADDING PRODUCTS (drip-feed friendly)
  // 1. Drop the product image into public/ (e.g. public/new-hoodie.png)
  // 2. Add one entry to the PRODUCTS array below:
  //    { id: "new-hoodie", name: "XENO New Hoodie", price: 55,
  //      image: "/new-hoodie.png", tagline: "Short line.", checkoutUrl: "" }
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
    checkoutUrl: "",
  },
  {
    id: "oversize-fleeced-hoodie",
    name: "XENO Oversize Fleeced Hoodie",
    price: 48,
    image: "/oversize-fleeced-hoodie.png",
    tagline: "Oversized fit, fleeced inside. Maximum comfort.",
    checkoutUrl: "",
  },
  {
    id: "gdwd-hoodie",
    name: "XENO GDWD Heavyweight Hoodie",
    price: 60,
    image: "/gdwd-hoodie.png",
    tagline: "Go hard or go home. Our heaviest hitter.",
    checkoutUrl: "",
  },
  {
    id: "never-stop-tee",
    name: "XENO Never Stop Oversized T-Shirt",
    price: 35,
    image: "/never-stop-tee.png",
    tagline: "The mantra. Never stop.",
    checkoutUrl: "",
  },
  {
    id: "classic-tee",
    name: "XENO Classic T-Shirt",
    price: 32,
    image: "/classic-tee.png",
    tagline: "The original. Clean and essential.",
    checkoutUrl: "",
  },
  {
    id: "essential-cotton-tee",
    name: "XENO Essential Cotton T-Shirt",
    price: 30,
    image: "/essential-cotton-tee.png",
    tagline: "Everyday essential, alien standard.",
    checkoutUrl: "",
  },
  {
    id: "trust-process-tee",
    name: "XENO Trust The Process T-Shirt",
    price: 28,
    image: "/trust-process-tee.png",
    tagline: "Trust the process. The unknown rewards patience.",
    checkoutUrl: "",
  },
];
