import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import CartSection from "../CartSection/CartSection";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCart] = useState([]);
  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (cartItem) => {
   if(carts.length<4){
    const checkCartsId = carts.find((cart) => cart._id === cartItem._id);
    if (!checkCartsId) {
      setCart([...carts, cartItem]);
    } else {
      alert("all ready exicts");
    }
   }else{
     alert('only selected 4 items')
   }
  };
  const choseOnMe = () => {
   if(carts.length>0){
    let random = Math.floor(Math.random() * carts.length);
    setCart([carts[random]]);
   }else{
     alert('please select product')
   }
   
  };
  const choseAgain = () => {
    setCart([]);
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
        <CartSection
          choseOnMe={choseOnMe}
          choseAgain={choseAgain}
          carts={carts}
        ></CartSection>
      </div>
    </div>
  );
};

export default Shop;
