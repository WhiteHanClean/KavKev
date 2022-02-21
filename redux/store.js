import { configureStore } from '@reduxjs/toolkit';
import { signUpReducer } from './products/registration.slice';
import { getProfileReducer } from './products/profile.slice';
import { productReducer } from './products/category.slice';
import { cartReducer } from '../redux/forCart/cartSlice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    category: productReducer,
    profile: getProfileReducer,
    cart: persistReducer({
      key: 'cart',
      storage
    }, cartSlice.reducer),
  },
});

export const persistor = persistStore(store)

