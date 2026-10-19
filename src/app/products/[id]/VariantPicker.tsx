"use client";
import { useState } from "react";

interface VariantPickerProps {
  colors?: string[];
  sizes?: string[];
  checkoutUrl: string;
  productName: string;
}

export default function VariantPicker({ colors, sizes, checkoutUrl, productName }: VariantPickerProps) {
  const [selectedColor, setSelectedColor] = useState(colors?.[0] || "");
  const [selectedSize, setSelectedSize] = useState(sizes?.[0] || "");
  const [quantity, setQuantity] = useState(1);

  const hasVariants = (colors && colors.length > 0) || (sizes && sizes.length > 0);

  if (!hasVariants) {
    return (
      <a
        href={checkoutUrl}
        style={{
          display: "inline-block",
          background: "#a78bfa",
          color: "#0a0a0f",
          fontWeight: 700,
          padding: "0.9rem 2.5rem",
          borderRadius: 999,
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Buy
      </a>
    );
  }

  return (
    <div>
      {colors && colors.length > 0 && (
        <div style={{ marginBottom: "1rem" }}>
          <label style={{ display: "block", color: "#b8b8c8", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Color: <span style={{ color: "#e8e8ee", fontWeight: 600 }}>{selectedColor}</span>
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: 999,
                  border: selectedColor === color ? "2px solid #a78bfa" : "1px solid #3a3a45",
                  background: selectedColor === color ? "#a78bfa22" : "transparent",
                  color: "#e8e8ee",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}
      {sizes && sizes.length > 0 && (
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ display: "block", color: "#b8b8c8", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
            Size: <span style={{ color: "#e8e8ee", fontWeight: 600 }}>{selectedSize}</span>
          </label>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "0.5rem 1rem",
                  borderRadius: 8,
                  border: selectedSize === size ? "2px solid #a78bfa" : "1px solid #3a3a45",
                  background: selectedSize === size ? "#a78bfa22" : "transparent",
                  color: "#e8e8ee",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  minWidth: "3rem",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}
      <div style={{ marginBottom: "1.5rem" }}>
        <label style={{ display: "block", color: "#b8b8c8", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
          Quantity
        </label>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: 8,
              border: "1px solid #3a3a45",
              background: "transparent",
              color: "#e8e8ee",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            −
          </button>
          <span style={{ color: "#e8e8ee", fontSize: "1.1rem", fontWeight: 600, minWidth: "2rem", textAlign: "center" }}>
            {quantity}
          </span>
          <button
            onClick={() => setQuantity(Math.min(99, quantity + 1))}
            style={{
              width: "2.5rem",
              height: "2.5rem",
              borderRadius: 8,
              border: "1px solid #3a3a45",
              background: "transparent",
              color: "#e8e8ee",
              cursor: "pointer",
              fontSize: "1.2rem",
            }}
          >
            +
          </button>
        </div>
      </div>
      <a
        href={checkoutUrl}
        style={{
          display: "inline-block",
          background: "#a78bfa",
          color: "#0a0a0f",
          fontWeight: 700,
          padding: "0.9rem 2.5rem",
          borderRadius: 999,
          textDecoration: "none",
          fontSize: "1.1rem",
        }}
      >
        Buy{selectedColor || selectedSize ? ` — ${[selectedColor, selectedSize].filter(Boolean).join(" / ")}` : ""}{quantity > 1 ? ` × ${quantity}` : ""}
      </a>
      {(selectedColor || selectedSize || quantity > 1) && (
        <p style={{ color: "#888", fontSize: "0.8rem", marginTop: "0.75rem" }}>
          {quantity > 1
            ? `You'll set the quantity to ${quantity} on the Stripe checkout page.`
            : `Your ${[selectedColor && "color", selectedSize && "size"].filter(Boolean).join(" and ")} will be confirmed at checkout.`}
        </p>
      )}
    </div>
  );
}
