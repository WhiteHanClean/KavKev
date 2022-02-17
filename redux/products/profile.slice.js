import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
} from '@reduxjs/toolkit';
  import $api from '../../utils/axios';

const initialState = {
    loading: false,
    error: null,
    ids:[],
    lol:{}
  };



  export const profileAdapter = createEntityAdapter();
  export const profileSelectors = profileAdapter.getSelectors(
    (state) => state.profile
  );


  export const getProfile = createAsyncThunk(
    'profile/getProfile',
    async () => {
      try {
        const {data} = await $api
          .get('/profile/my/')
      
          return data
      } catch (e) {
        return e.error.message;
      }
    }
    
  );
  
  const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {

      builder.addCase(getProfile.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.lol = action.payload
        state.error = null;
      });
      builder.addCase(getProfile.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
    },
  });


export const getProfileReducer = profileSlice.reducer;