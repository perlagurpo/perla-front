import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './features/scrollSlice';
import langReducer from './features/langSlice';

export default configureStore(
  {
    reducer: {
      scroll: scrollReducer,
      lang: langReducer
    },
  }
);