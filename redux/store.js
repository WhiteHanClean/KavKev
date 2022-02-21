import { configureStore } from '@reduxjs/toolkit';
import { signUpReducer } from './products/registration.slice';
import { getProfileReducer } from './products/profile.slice';
import { productReducer } from './products/category.slice';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import cartSlice from './forCart/cartSlice';

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

// import { configureStore } from '@reduxjs/toolkit';
// import cartSlice from './forCart/cartSlice';
// import { signUpReducer } from './products/registration.slice';
// import { productReducer } from './products/category.slice';
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

// export const store = configureStore({
//   reducer: {
//     signUp: signUpReducer,
//     category: productReducer,
//     cart: persistReducer({
//       key: 'cart',
//       storage
//     }, cartSlice.reducer),
//   },
// });

// export const persistor = persistStore(store)