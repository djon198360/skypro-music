/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// import {  useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
  current_track: null,
  isPlaying_track: false,
  shuffle: false,
  prevTrack: null,
  nextTrack: null,
  isLoopTrack: false,
  isMutedPlayer: false,
  accessToken:null,
  refreshToken:null,
  favoriteTrack:[]
};
// const count = useSelector((state) => state)
export const postsSlice = createSlice({
  name: "handleTrackState",
  initialState,
  reducers: {
    setCurrentTrack(state, action) {
      state.current_track = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying_track = action.payload;
    },
    addShuffleTrack(state, action) {
      state.shuffle = action.payload;
    },
    addNextTrack(state, action) {
      state.nextTrack = action.payload;
    },
    addPrevTrack(state, action) {
      state.prevTrack = action.payload;
    },

    setIsLoop(state, action) {
      state.isLoopTrack = action.payload;
    },
    setIsMuted(state, action) {
      state.isMutedPlayer = action.payload;
    },

    setAccessToken(state, action) {
      state.accessToken = action.payload;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload;
    },
    setFavoriteTrack(state, action) {
      state.favoriteTrack = action.payload;
    },
  },
});

export const {
  setCurrentTrack,
  setIsPlaying,
  addShuffleTrack,
  addNextTrack,
  addPrevTrack,
  setIsLoop,
  setIsMuted,
  setAccessToken,
  setRefreshToken,
  setFavoriteTrack,
} = postsSlice.actions;
export default postsSlice.reducer;
