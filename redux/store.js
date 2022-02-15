import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './forCart/cartSlice';
import { signUpReducer } from './products/registration.slice';


export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    cart: cartSlice.reduce
  },
});
