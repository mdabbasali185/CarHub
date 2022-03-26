
import './CartSection.css'

const CartSection = (props) => {
  return (
    <div>
      <h1 className="text-center">Selected Items</h1>
      {
        props.carts.map(cart=>(
          <h4 key={cart._id}>{cart.name}</h4>
        ))
      }
      <div>
          <button className='choseOnMe btn' onClick={props.choseOnMe} >Chose on for me</button>
          <button className='choseAgain btn' onClick={props.choseAgain}>Chose again</button>
      </div>
    </div>
  );
};

export default CartSection;
