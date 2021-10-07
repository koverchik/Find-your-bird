export enum VideoTypes {
  ADD_LOCAL_PATCH = 'ADD_LOCAL_PATCH',
}

export type addLocalPatcType = (payload: payloadVideo) => {
  type: VideoTypes.ADD_LOCAL_PATCH;
  payload: payloadVideo;
};

export type addLocalPatcActionType = {
  type: VideoTypes.ADD_LOCAL_PATCH;
  payload: payloadVideo;
};

type payloadVideo = {
  id: string;
  pathLocal: string;
};
