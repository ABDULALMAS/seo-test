// src/store/slices/exampleSlice.ts
import { createSlice } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
  initialState: [
1,2,3,4,55,
  ],
  reducers: {}
});

export default exampleSlice.reducer;
