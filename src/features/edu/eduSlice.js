import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './eduAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    return response.data;
  }
);

export const eduSlice = createSlice({
  name: 'edu',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const { incrementByAmount } = eduSlice.actions;

// export const selectCount = (state) => state.edu.value;


export default eduSlice.reducer;
