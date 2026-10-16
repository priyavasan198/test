import React from "react";
import ProductList from "./ProductList";

function Dashboard({ products, loading }) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: "20px" }}>
      <h1>Product Dashboard</h1>
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
    </div>
  );
}

export default Dashboard;
