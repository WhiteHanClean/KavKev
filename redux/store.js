import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './forCart/cartSlice';
import { signUpReducer } from './products/registration.slice';
import { getProfileReducer } from './products/profile.slice'
import { productReducer } from './products/category.slice';

export const store = configureStore({
  reducer: { signUp: signUpReducer, category: productReducer, profile: getProfileReducer },
});
