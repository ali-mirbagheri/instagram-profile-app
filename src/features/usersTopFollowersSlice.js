import { createSlice } from "@reduxjs/toolkit";
export const usersTopFollowersSlice = createSlice({
  name: "usersTopFollowers",
  initialState: {
    value: [],
  },
  reducers: {
    addUsersTF: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addUsersTF } = usersTopFollowersSlice.actions;

export default usersTopFollowersSlice.reducer;
