import "./Card.css";

const Card = (props) => {
  const { _id, picture, name, company } = props.product;
  return (
    <div className="col my-card" key={_id}>
      <div className="card">
        <img src={picture} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Name: {name}</h5>
          <p className="card-text">{company}</p>
          <button className="cart-btn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
