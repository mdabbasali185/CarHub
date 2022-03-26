
import './CartSection.css'

const CartSection = (props) => {
  return (
    <div className='right-part'>
      <h1 className="text-center right-section">Selected <span className='header-2'>Items</span></h1>
      {
        props.carts.map(cart=>(
          <div>
            <h4 key={cart._id}>{cart.name}</h4>
            <hr />
          </div>
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
