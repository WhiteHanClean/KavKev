import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';

export const cartAdapter = createEntityAdapter();
export const cartSelectors = cartAdapter.getSelectors((state) => state.cart);

export const fetchCartItems = createAsyncThunk(
  'cart/fetchCartItems',
  async () => {
    try {
      const { data } = await $api.get('my_cart');
      return data;
    } catch (error) {
      return e.error.message;
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loading: false,
    error: null,
    ids: [],
    entities: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCartItems.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCartItems.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(fetchCartItems.fulfilled, (state, action) => {
      cartAdapter.setAll(state, action.payload);
      console.log(action);
      state.loading = false;
    });
  },
});

export const cartReducer = cartSlice.reducer;
