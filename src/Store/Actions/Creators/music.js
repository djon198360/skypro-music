/* eslint-disable no-plusplus */
import {
  ADD_ALL_TRACK,
  TOGGLE_TODO,
  LOADING,
  CURRENT_TRACK,
  ISPLAYING_TRACK,
  ADD_SHUFFLE_ALL_TRACK,
  SHUFFLE_TRACK,
} from "../Types/music";

// let nextTodoId = 0;

export const addTodo = (content) => ({
  type: ADD_ALL_TRACK,
  payload: {
    content,
  },
});

export const addShuffleAllTrack = (content) => ({
  type: ADD_SHUFFLE_ALL_TRACK,
  payload: { content },
});

export const addShuffleTrack = (content) => ({
  type: SHUFFLE_TRACK,
  payload: { content },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: { id },
});

export const addloading = (content) => ({
  type: LOADING,
  payload: {
    content,
  },
});

export const addCurrentTrack = (content) => ({
  type: CURRENT_TRACK,
  payload: {
    content,
  },
});

export const addIsPlaying = (content) => ({
  type: ISPLAYING_TRACK,
  payload: {
    content,
  },
});
