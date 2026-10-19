"use client";

import { useState } from "react";
import Image from "next/image";
import { PRODUCTS, CATEGORIES, orderLink, type Category } from "./data/products";

export default function ShopSection() {
  const [active, setActive] = useState<Category | "All">("All");
  const shown =
    active === "All" ? PRODUCTS : PRODUCTS.filter((p) => p.category === active);

  return (
    <section
      id="shop"
      className="border-t border-white/10 bg-black/40 mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28"
    >
      <p className="text-center text-xs font-bold tracking-[0.5em] text-[#7c3aed]">
        THE DROP
      </p>
      <h2 className="mt-4 text-center text-3xl font-black tracking-tight text-white sm:text-4xl">
        THE COLLECTION
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-sm text-zinc-500">
        Made to order. Ships from Canada.
      </p>

      {/* Category tabs */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {(["All", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-5 py-2 text-sm font-bold tracking-wide transition ${
              active === c
                ? "bg-[#7c3aed] text-white shadow-[0_0_24px_rgba(124,58,237,0.5)]"
                : "border border-white/15 text-zinc-400 hover:border-white/40 hover:text-white"
            }`}
          >
            {c.toUpperCase()}
          </button>
        ))}
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => {
          const buyHref = `/products/${p.id}`;
          return (
            <article
              key={p.id}
              className="product-card overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80"
            >
              <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-bold tracking-[0.25em] text-[#22ff88]">
                  {p.category.toUpperCase()}
                </p>
                <h3 className="mt-1 text-base font-bold text-white">{p.name}</h3>
                <p className="mt-1 text-sm text-zinc-500">{p.tagline}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-black text-[#22ff88]">
                    ${p.price}
                    <span className="ml-1 text-xs font-semibold text-zinc-500">CAD</span>
                  </span>
                  <a
                    href={buyHref}
                    className="rounded-full border border-[#7c3aed] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#7c3aed]"
                  >
                    Buy
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
