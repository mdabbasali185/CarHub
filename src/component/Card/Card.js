import "./Card.css";

const Card = (props) => {
  const { _id, picture, name, company, price } = props.product;
  return (
    <div className="col my-card" key={_id}>
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5>
            <span className="card-title">Name: </span> {name}
          </h5>
          <p>
            <span className="card-text">Company: </span> {company}
          </p>
          <p>
            <span className="price">Price: $</span>
            {price}
          </p>
        </div>
        <button
          className="cart-btn btn"
          onClick={() => props.addToCart(props.product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
