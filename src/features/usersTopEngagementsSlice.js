import { createSlice } from "@reduxjs/toolkit";
export const usersTopEngagementsSlice = createSlice({
  name: "usersTopEngagements",
  initialState: {
    value: [],
  },
  reducers: {
    addUsersTE: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addUsersTE } = usersTopEngagementsSlice.actions;

export default usersTopEngagementsSlice.reducer;
