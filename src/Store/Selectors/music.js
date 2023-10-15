const todoSelector = (store) => store.todo;

export const todoIdsSelector = (store) => todoSelector(store)?.allTrack || [];

export const currentTrackSelector = (store) => todoSelector(store)?.current_track || null ;

export const todoByIdSelector = (store) => {
  const todoStore = todoSelector(store);

  if (!todoStore) {
    return {};
  }
  
  const todoItem = todoStore.allTrack;

  return {
    ...todoItem,
  };
}

 export const todosSelector = (store) => todoSelector(store)?.allTrack || [];
 export const shuffleAllTrackSelector = (store) => todoSelector(store)?.shuffleAllTrack || false;
 export const isPlayingSelector = (store) => todoSelector(store)?.isPlaying_track || false;
 export const loadingSelector = (store) => todoSelector(store)?.loading || false;
 export const shuffleSelector = (store) => todoSelector (store)?.shuffle || false;
  // todoIdsSelector(store).map((id) => todoByIdSelector(store, id)); 

  // export const todosSelector = (store) => (store.todo)