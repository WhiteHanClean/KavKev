import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import $api from '../../utils/axios';

const initialState = {
  loading: false,
  error: null,
  username: null,
  ids: [],
  entities: {},
  access: null,
  refresh: null,
};

export const signUpAdapter = createEntityAdapter();
export const signUpSelectors = signUpAdapter.getSelectors(
  (state) => state.registration
);

export const signUpUser = createAsyncThunk(
  'registration/signUpUser',
  async ({ username, password, first_name, last_name }) => {
    try {
      await $api.post('registration/', {
        username,
        password,
        first_name,
        last_name,
      });
    } catch (e) {
      return e.error.message;
    }
  }
);

const signUpSlice = createSlice({
  name: 'registration',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // SIGNUP USER
    builder.addCase(signUpUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(signUpUser.fulfilled, (state, action) => {
      state.loading = false;
      state.username = action.payload;
      state.token = action.payload.access;
      state.refresh = action.payload.refresh;
      state.error = null;
    });
    builder.addCase(signUpUser.rejected, (state, action) => {
      state.error = action.error.message;
      state.username = null;
      state.loading = false;
      state.refresh = null;
      state.access = null;
    });
  },
});

export const signUpReducer = signUpSlice.reducer;
