import { addLocalPatcType, VideoTypes } from './types';

export const addLocalPatch: addLocalPatcType = (payload) => {
  return {
    type: VideoTypes.ADD_LOCAL_PATCH,
    payload,
  };
};
