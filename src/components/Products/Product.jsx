import { useStateValue } from "../../StateProvider";
import "./Product.css";

const Product = ({ title, id, price, image, rating }) => {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
      <div className="product__info">
        <h6>{title}</h6>
        <small className="product__price">
          <span>CAD$</span>
          <strong>{price}</strong>
        </small>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <small>⭐</small>
            ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
};

export default Product;
