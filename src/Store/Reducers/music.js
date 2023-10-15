/* eslint-disable default-param-last */
import { ADD_ALL_TRACK, TOGGLE_TODO, LOADING,CURRENT_TRACK,ISPLAYING_TRACK,ADD_SHUFFLE_ALL_TRACK,SHUFFLE_TRACK } from "../Actions/Types/music";

const initialState = {
  allTrack: [],
  loading: true,
  current_track: null,
  isPlaying_track: false,
  shuffle: false,
  shuffleAllTrack : null,
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
case ADD_SHUFFLE_ALL_TRACK :{
  const { content } = action.payload;
  return {
       ...state,
       shuffleAllTrack: content,
  };
}
    case LOADING: {
      const { content } = action.payload;
      return {
          ...state,
        loading: content,
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      const targetTodo = state.byIds[id];
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...targetTodo,
            completed: !targetTodo.completed,
          },
        },
      };
    }

case CURRENT_TRACK: {
  const { content } = action.payload;
  return {
    ...state,
    current_track : content,
  }
}

case SHUFFLE_TRACK: {
  const { content } = action.payload;
  return {
    ...state,
    shuffle : content,
  }
}

case ISPLAYING_TRACK : {
  const {content} = action.payload;
  return {...state,
  isPlaying_track:content}
}

    default:
      return state;
  }
}
