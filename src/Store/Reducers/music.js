/* eslint-disable default-param-last */
import {
  ADD_ALL_TRACK,
  LOADING,
  CURRENT_TRACK,
  ISPLAYING_TRACK,
  SHUFFLE_TRACK,
  PREV_TRACK,
  NEXT_TRACK,
} from "../Actions/Types/music";

const initialState = {
  loading: true,
  current_track: null,
  isPlaying_track: false,
  shuffle: false,
  prevTrack: null,
  nextTrack:null,
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ALL_TRACK: {
      const { content } = action.payload;
      return {
        ...state,
        allTrack: content,
      };
    }

    case LOADING: {
      const { content } = action.payload;
      return {
        ...state,
        loading: content,
      };
    }

    case CURRENT_TRACK: {
      const { content } = action.payload;
      return {
        ...state,
        current_track: content,
      };
    }
    case PREV_TRACK: {
      const { content } = action.payload;
      return {
        ...state,
        prevTrack: content,
      };
    }
    case NEXT_TRACK: {
      const { content } = action.payload;
      return {
        ...state,
        nextTrack: content,
      };
    }

    case SHUFFLE_TRACK: {
      const { content } = action.payload;
      return {
        ...state,
        shuffle: content,
      };
    }

    case ISPLAYING_TRACK: {
      const { content } = action.payload;
      return { ...state, isPlaying_track: content };
    }

    default:
      return state;
  }
}
