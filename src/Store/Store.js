import { configureStore } from "@reduxjs/toolkit";
import { allTrackStore } from "../Services/ApiTrack";
import postsSlice from "./Slice/Slice";
import UserDataSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    [allTrackStore.reducerPath]: allTrackStore.reducer,
    handleTrackState: postsSlice,
    userDataState: UserDataSlice,
  
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      allTrackStore.middleware,
     
    ),
});
