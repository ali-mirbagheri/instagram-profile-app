import { configureStore } from "@reduxjs/toolkit";
import usersTopFollowersReducer from "./usersTopFollowersSlice";
import usersTopEngagementsReducer from "./usersTopEngagementsSlice";
import userDataReducer from "./userDataSlice";
export default configureStore({
  reducer: {
    usersTopFollowers: usersTopFollowersReducer,
    usersTopEngagements: usersTopEngagementsReducer,
    userData: userDataReducer,
  },
});
