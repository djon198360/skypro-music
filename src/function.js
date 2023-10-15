import { useDispatch } from "react-redux";
import { addCurrentTrack } from "./Store/Actions/Creators/music";

const dispatch = useDispatch();

export const addTrackPlayer = (content) => {
  
  dispatch(addCurrentTrack(content));
};
