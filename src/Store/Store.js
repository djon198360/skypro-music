import { configureStore } from "@reduxjs/toolkit";
import { allTrackStore } from "../Services/todo";
import { allUserStore } from "../API/User";
// import todoReducer from "./Reducers/music";
import postsSlice from "./Slice/Slice";
import { useGetTokenMutation } from "../Services/Auth";
import UserDataSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    [allTrackStore.reducerPath]: allTrackStore.reducer,
    [allUserStore.reducerPath]: allUserStore.reducer,
    handleTrackState: postsSlice,
    userData: UserDataSlice,
    userToken:useGetTokenMutation,
    
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      allTrackStore.middleware,
      allUserStore.middleware
    ),
});
