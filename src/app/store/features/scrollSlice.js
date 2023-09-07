import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scroll',
  initialState: {
    value: 0,
  },
  reducers: {
    setCurrent: (state, action) => {
      state.value = action.payload;
    },
  }
});

/* Acciones generadas por createSlice en base a los reducers que les pasamos */
export const { setCurrent, toogleScroll } = scrollSlice.actions;

export default scrollSlice.reducer;