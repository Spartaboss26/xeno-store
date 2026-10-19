"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  tagline: string;
  category: string;
  colorImages: string[];
}

export default function ProductCard({ id, name, price, image, tagline, category, colorImages }: ProductCardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Combine main image with color variant images
  const allImages = [image, ...colorImages];
  
  const next = () => setCurrentIndex((i) => (i + 1) % allImages.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);

  return (
    <article className="product-card overflow-hidden rounded-2xl border border-white/10 bg-zinc-950/80">
      <div className="relative aspect-square w-full overflow-hidden bg-zinc-900">
        <Image
          src={allImages[currentIndex]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {allImages.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Previous image"
            >
              ‹
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black/80"
              aria-label="Next image"
            >
              ›
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? "bg-white" : "bg-white/40"}`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="p-5">
        <p className="text-[11px] font-bold tracking-[0.25em] text-[#22ff88]">
          {category.toUpperCase()}
        </p>
        <h3 className="mt-1 text-base font-bold text-white">{name}</h3>
        <p className="mt-1 text-sm text-zinc-500">{tagline}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-black text-[#22ff88]">
            ${price}
            <span className="ml-1 text-xs font-semibold text-zinc-500">CAD</span>
          </span>
          <a
            href={`/products/${id}`}
            className="rounded-full border border-[#7c3aed] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#7c3aed]"
          >
            Buy
          </a>
        </div>
      </div>
    </article>
  );
}
