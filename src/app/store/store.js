import { configureStore } from '@reduxjs/toolkit';
import scrollReducer from './features/scrollSlice';
import langReducer from './features/langSlice';
import liteReducer from './features/liteSlice';

export default configureStore(
  {
    reducer: {
      scroll: scrollReducer,
      lang: langReducer,
      lite: liteReducer
    },
  }
);