import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CartSection from "../CartSection/CartSection";


const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const addToCart = (cartItem) => {
    setCart([...carts, cartItem]);
  };
  return (
    <div className="row">
      <div className="col-md-8">
        <div className="row align-items-stretch row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.map((product) => (
            <Card
              product={product}
              key={product._id}
              addToCart={addToCart}
            ></Card>
          ))}
        </div>
      </div>
      <div className="col-md-4">
          <CartSection></CartSection>
      </div>
    </div>
  );
};

export default Shop;
