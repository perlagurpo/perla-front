import { createSlice } from "@reduxjs/toolkit";

export const liteSlice = createSlice({
  name: 'lite',
  initialState: {
    value: false,
  },
  reducers: {
    setLite: (state, action) => {
      // Chequeo por las dudas que se quiera setear un estado inválido
      if(typeof(action.payload) == "boolean") {
        state.value = action.payload;
      }
    },
    toggleLite: (state) => {
      state.value = !state.value;
    } 
  }
});

export const { setLite } = liteSlice.actions;

export default liteSlice.reducer;