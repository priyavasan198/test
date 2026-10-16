import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ products }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {products.slice(0, 5).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
