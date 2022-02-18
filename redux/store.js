import { configureStore } from '@reduxjs/toolkit';
import { signUpReducer } from './products/registration.slice';
import { getProfileReducer } from './products/profile.slice';
import { productReducer } from './products/category.slice';
import { cartReducer } from '../redux/forCart/cartSlice';

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    category: productReducer,
    cart: cartReducer,
    profile: getProfileReducer,
  },
});
