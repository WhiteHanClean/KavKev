import { configureStore } from '@reduxjs/toolkit';
import { signUpReducer } from './products/registration.slice';
import { getProfileReducer } from './products/profile.slice'

export const store = configureStore({
  reducer: { signUp: signUpReducer },
  reducer: { profile: getProfileReducer}
});
