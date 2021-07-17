import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CommentState {
  postId: number | undefined;
  body: string;
}

const initialState: CommentState[] = [
  {
    postId: undefined,
    body: '',
  },
];

const commentSlice = createSlice({
  name: 'comment',
  initialState,
  reducers: {
    addComment(state, action: PayloadAction<CommentState>) {
      // it's okay to do this because immer makes it immutable under the hood
      state.push(action.payload);
    },
  },
});

export const { addComment } = commentSlice.actions;
export default commentSlice.reducer;
