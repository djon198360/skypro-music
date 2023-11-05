import { configureStore } from "@reduxjs/toolkit";
import { allTrackStore } from "../Services/ApiTrack";
import postsSlice from "./Slice/Slice";
import { allToken } from "../Services/Auth";
import UserDataSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    [allTrackStore.reducerPath]: allTrackStore.reducer,
    handleTrackState: postsSlice,
    userDataState: UserDataSlice,
    [allToken.reducerPath]: allToken.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      allTrackStore.middleware,
      allToken.middleware
    ),
});
