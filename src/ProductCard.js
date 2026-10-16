import React from "react";
import { Rating } from "@mui/material";

function ProductCard({ product }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "200px" }}>
      <img src={product.image} alt={product.title} width="100" height="100" style={{ objectFit: "contain" }} />
      <h3 style={{ fontSize: "16px", margin: "10px 0" }}>{product.title}</h3>
      <p style={{ fontWeight: "bold", margin: "5px 0" }}>Price: ${product.price}</p>
      <div style={{ marginTop: "10px" }}>
        <Rating 
          value={product.rating ? product.rating.rate : 0} 
          precision={0.5} 
          readOnly 
        />
      </div>
    </div>
  );
}

export default ProductCard;
