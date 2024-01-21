import React from "react";
import { useNavigate } from "react-router-dom"; 
import { renderDefaultCoffee } from "../functions/images";
import { postAction} from "../api/actions";
import { useAuthState } from "../config/firebase";


const Product = (curElem) => {
  const { id, name, image, price, categories } = curElem;
  const navigate = useNavigate();
  let defCoffee = "";
  let coffee = ""
  if(image)coffee = image.url;
  defCoffee = renderDefaultCoffee(categories);

  const { uid, isAuthenticated } = useAuthState();

  const handleClick = async () => {
    try {

      if(isAuthenticated){
        await postAction({ user_id: uid, product_id: id, action_type: 'click' });

      }

      navigate(`/singleproduct/${id}`);
    } catch (error) {
      console.error('Error performing action and navigating:', error);
    }
  };


  return (

    <div className="card" onClick={handleClick}>
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

  );
};

export default Product;