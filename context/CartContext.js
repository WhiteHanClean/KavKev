import React, { useReducer } from "react";

export const cartContext = React.createContext();

const INIT_STATE = {
  cart: {},
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "CASE_GET_CART":
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function getCart() {
    let cart = JSON.parse(localStorage.getItem("cart"));
    if (!cart) {
      cart = {
        products: [],
        totalPrice: 0,
      };
    }
    console.log(cart);
    cart.totalPrice = calcTotalPrice(cart.products);
    dispatch({
      type: "CASE_GET_CART",
      payload: cart,
    });
  }
 


  return (
    <cartContext.Provider
      value={{
        cart: state.cart,
        getCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default CartContextProvider;
