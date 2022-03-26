import "./CartSection.css";

const CartSection = (props) => {
  return (
    <div className="right-part">
      {/* selected part */}
      <h1 className="text-center text-secondary fw-bold">
        Selected <span className="header-2">Items</span>
      </h1>
      {props.carts.map((cart) => (
        <div>
          <h4 key={cart._id}>{cart.name}</h4>
          <hr />
        </div>
      ))}
      <div>
        {/* chose on button part */}
        <button className="choseOnMe btn" onClick={props.choseOnMe}>
          Chose on for me
        </button>
        {/* chose again button part */}
        <button className="choseAgain btn" onClick={props.choseAgain}>
          Chose again
        </button>
      </div>
    </div>
  );
};

export default CartSection;
