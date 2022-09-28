import { useState } from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = payload => {
    setState(prevState => ({
      ...prevState,
      cart: [...prevState.cart, payload]
    }));
  }

  const removeFromCart = payload => {
    setState(prevState => ({
      ...prevState,
      cart: state.cart.filter(item => item.id !== payload.id)
    }));
  }

  return {
    state,
    addToCart,
    removeFromCart,
  }
}

export default useInitialState;