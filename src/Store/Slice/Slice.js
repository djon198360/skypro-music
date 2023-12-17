/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
// import {  useSelector } from "react-redux";
import { createSlice } from "@reduxjs/toolkit";
import { useGetAllTrackQuery } from "../../Services/ApiTrack";

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
  favoriteTrack:[],
  category:[],
  allTrack:[],
  page:"allTrack",
  filterAuthor:[],
  filterGenre:[],
  filterYear:[],
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
    setFavoriteAllTrack(state, action) {
      state.favoriteTrack = action.payload;
    },
    setAllTrack(state, action) {
      state.allTrack = action.payload;
    },
    setTrackCategory(state, action) {
      state.category = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setFilterAuthors(state, action) {

      return {
        // Again, one less level of nesting to copy
        ...state,
        filterAuthor: action.payload
      }
    

/*       !state.filterAuthor.includes(action.payload) ?
...state.filterAuthor = action.payload : ...state.filterAuthor.filter((item) => item !== action.payload)
   //   state.filterAuthor = action.payload */
  
    },
    setFilterGenres(state, action) {
      state.filterGenre = action.payload;
    },
    setFilterYears(state, action) {
      state.filterYear = action.payload;
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
  setFavoriteAllTrack,
  setAllTrack,
  setTrackCategory,
  setPage,
  setFilterAuthors,
  setFilterGenres,
  setFilterYears,
} = postsSlice.actions;
export default postsSlice.reducer;
