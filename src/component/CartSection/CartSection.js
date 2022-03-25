import React from "react";
import './CartSection.css'

const CartSection = () => {
  return (
    <div>
      <h1 className="text-center">Selected Items</h1>
      <div>
          <button>Chose on for me</button>
          <button>Chose again</button>
      </div>
    </div>
  );
};

export default CartSection;
