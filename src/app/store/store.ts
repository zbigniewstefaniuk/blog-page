import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/posts-api-slice';
import commentReducer from '../features/add-comment/post-add-comment';
import favouritesReducer from '../features/favourites/favourites';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    addComment: commentReducer,
    addToFavorite: favouritesReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(apiSlice.middleware);
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
