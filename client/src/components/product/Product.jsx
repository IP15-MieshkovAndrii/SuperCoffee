import React from "react";
import { useNavigate } from "react-router-dom"; 
import { renderDefaultCoffee } from "../../functions/images";

const Product = (curElem) => {
  const { id, name, image, price, categories } = curElem;
  let defCoffee = "";
  let coffee = ""
  if (image) coffee = image.url;
  defCoffee = renderDefaultCoffee(categories);
  const navigate = useNavigate();
  return (
    <span onClick={navigate(`/singleproduct/${id}`)}>
      <div className="card">
        <figure>
          <img src={coffee || defCoffee} alt={name} />
          <figcaption className="caption">{categories[0].name}</figcaption>
        </figure>

        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price">{price.formatted_with_symbol}</p>
          </div>
        </div>
      </div>
    </span>
  );
};

export default Product;