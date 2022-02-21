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
  category: {},
};

export const categoryAdapter = createEntityAdapter();
export const categorySelectors = categoryAdapter.getSelectors(
  (state) => state.category
);

export const getAllCategoryEntities = createAsyncThunk(
  'category/getAllCategoryEntities',
  async () => {
    try {
      const { data } = await $api.get(`/category/`);
      return data;
    } catch (e) {
      return e.error.message;
    }
  }
);

export const getCategory = createAsyncThunk(
  'category/getCategory',
  async (id) => {
    try {
      const { data } = await $api.get(`/category/${id}`);
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
      categoryAdapter.setAll(state, action.payload);
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getAllCategoryEntities.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    builder.addCase(getCategory.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategory.fulfilled, (state, action) => {
      state.loading = false;
      state.category = action.payload;
    });
    builder.addCase(getCategory.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = categorySlice.reducer;
