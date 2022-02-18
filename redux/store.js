import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './forCart/cartSlice';
import { signUpReducer } from './products/registration.slice';
import { productReducer } from './products/category.slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

export const store = configureStore({
  reducer: {
    signUp: signUpReducer,
    category: productReducer,
    cart: persistReducer({
      key: 'cart',
      storage
    }, cartSlice.reducer),
  },
});

export const persistor = persistStore(store)

