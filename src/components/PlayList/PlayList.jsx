import { RenderItem } from "./Item";

export const PlayListItemRender = (trackStore) =>
  trackStore.trackStore.map((playlist, index) => (
    <RenderItem track={playlist} index={index} key={playlist.id}></RenderItem>
  ));
