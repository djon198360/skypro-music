const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allTrack || [];
export const currentTrackSelector = (store) =>
  todoSelector(store)?.current_track || null;
export const todosSelector = (store) => todoSelector(store)?.allTrack || [];
export const isPlayingSelector = (store) =>
  todoSelector(store)?.isPlaying_track || false;
export const loadingSelector = (store) => todoSelector(store)?.loading || false;
export const shuffleSelector = (store) => todoSelector(store)?.shuffle || false;
export const prevTrackSelector = (store) => todoSelector(store)?.prevTrack || false;
export const nextTrackSelector = (store) => todoSelector(store)?.nextTrack || false;