import { configureStore } from '@reduxjs/toolkit';
import { signUpReducer } from './products/registration.slice';

export const store = configureStore({
  reducer: { signUp: signUpReducer },
});
