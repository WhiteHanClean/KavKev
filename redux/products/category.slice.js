import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';

const initialState = {
  loading: false,
  error: null,
  ids: [],
  entities: {},
  about_category: {
    id: null,
    category: '',
  },
};

export const categoryAdapter = createEntityAdapter();
export const categorySelectors = categoryAdapter.getSelectors(
  (state) => state.category
);

export const getAllCategoryEntities = createAsyncThunk(
  'category/getAllCategoryEntities',
  async (id) => {
    try {
      const { data } = await $api.get(`/category/${id}/`);
      return data;
    } catch (e) {
      return e.error.message;
    }
  }
);

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCategoryEntities.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCategoryEntities.fulfilled, (state, action) => {
      categoryAdapter.setAll(state, action.payload.products);
      state.about_category.category = action.payload.category;
      state.about_category.id = action.payload.id;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllCategoryEntities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = categorySlice.reducer;
