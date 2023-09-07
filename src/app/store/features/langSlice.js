import { createSlice } from "@reduxjs/toolkit";

const langData = require('@/components/data/language/languages.json');

export const langSlice = createSlice({
  name: 'lang',
  initialState: {
    value: "ES",
    content: langData["ES"],
    availableValues: Object.keys(langData)
  },
  reducers: {
    setLang: (state, action) => {
      if(state.availableValues.includes(action.payload)) {
        state.value = action.payload;
        state.content = langData[action.payload];
      }      
    }
  }
});

export const { setLang } = langSlice.actions;

export default langSlice.reducer;