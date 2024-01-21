import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartReducer";
import { postAction } from "../api/actions";
import { useAuthState } from "../config/firebase";

const CartContext = createContext();

const getLocaleCartData = () => {
  let newCartData = localStorage.getItem("coffeeCart");
  if(!newCartData){
    return []
  } else {
    return JSON.parse(newCartData);
  }
}

const initialState = {
  cart: getLocaleCartData(),
  totalItem: "10",
  totalAmount: "",
  shippingFee: 5,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { uid, isAuthenticated } = useAuthState();

  const addToCart = async(id, amount, product) => {
    try {
      if(isAuthenticated){
        await postAction({
          user_id: uid,
          product_id: id,
          action_type: `cart`,
      });
      }

      dispatch({ type: "ADD_TO_CART", payload: { id, amount, product } });
    } catch (error) {
      console.error('Error posting action and updating filters:', error);
    }

  };

  const setDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  useEffect(() => {
    dispatch({ type: "CART_ITEM_PRICE_TOTAL" });

    localStorage.setItem("coffeeCart", JSON.stringify(state.cart))
  }, [state.cart])

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem, clearCart, setDecrease, setIncrease }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };