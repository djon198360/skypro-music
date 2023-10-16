

export const creatorCurrentTrack = (content, index) => {
  const trackObject = {
    id: content.id,
    name: content.name,
    author: content.author,
    track_file: content.track_file,
    key: index,
  };
  return trackObject;
};

