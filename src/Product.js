import React from 'react'
//import photo from './asset/photo.jpeg'

import './Product.css'

const Product = ({ productObj,productSOCK }) => {
  const currentProducts = productObj || productSOCK;
    return (
        <div style={{ display: "flex" }}>
            {currentProducts?.map((item) => {
                return (
                    <div className="containerCard">
                        <img src={item.image} className="imageShoe" alt={item.name} />
                        <h3 className="headingShoe">{item.name}</h3>
                        <div className="priceContainerShoe"> 
                            <h4 className="priceShoe">${item.price}</h4> &nbsp;
                            <strike className="strikeShoe">${item.strikePrice}</strike>
                        </div>
                        <button className="buttonShoe">BUY NOW</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Product
