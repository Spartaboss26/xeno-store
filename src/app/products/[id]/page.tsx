import { notFound } from "next/navigation";
import { PRODUCTS, orderLink } from "../../data/products";
import VariantPicker from "./VariantPicker";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ id: p.id }));
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = PRODUCTS.find((p) => p.id === id);
  if (!product) notFound();

  const buyHref = product.checkoutUrl ? product.checkoutUrl : orderLink(product.name);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0f",
        color: "#e8e8ee",
        fontFamily: "system-ui",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
      }}
    >
      <div style={{ maxWidth: 900, width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", borderRadius: 16, border: "1px solid #2a2a35" }}
        />
        <div>
          <p style={{ color: "#a78bfa", fontSize: "0.85rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {product.category}
          </p>
          <h1 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>{product.name}</h1>
          <p style={{ color: "#b8b8c8", fontSize: "1.1rem" }}>{product.tagline}</p>
          <p style={{ fontSize: "1.75rem", fontWeight: 700, margin: "1.25rem 0" }}>
            ${product.price} <span style={{ fontSize: "1rem", fontWeight: 400, color: "#888" }}>CAD</span>
          </p>
          <VariantPicker
            colors={product.colors}
            sizes={product.sizes}
            checkoutUrl={buyHref}
            productName={product.name}
          />
          <p style={{ marginTop: "2rem" }}>
            <a href="/" style={{ color: "#a78bfa" }}>← Back to the store</a>
          </p>
          <p style={{ color: "#666", fontSize: "0.85rem", marginTop: "1rem" }}>Beyond the Unknown.</p>
        </div>
      </div>
    </main>
  );
}
