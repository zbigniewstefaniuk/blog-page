import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavouritesState {
  postId: number | undefined;
}

const initialState: FavouritesState[] = [
  {
    postId: undefined,
  },
];

const commentSlice = createSlice({
  name: 'favourites',
  initialState,
  reducers: {
    addToFavorite(state, action: PayloadAction<FavouritesState>) {
      // it's okay to do this because immer makes it immutable under the hood
      state.findIndex((item) => item.postId === action.payload.postId) === -1 && state.push(action.payload);
    },
  },
});

export const { addToFavorite } = commentSlice.actions;
export default commentSlice.reducer;
