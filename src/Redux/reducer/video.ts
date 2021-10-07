import { addLocalPatcActionType, VideoTypes } from '../action/video/types';
import { VideoItem } from './types';

export const initialStateVideo: VideoItem[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
    pathLocal: null,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    uri: 'http://techslides.com/demos/sample-videos/small.mp4',
    pathLocal: null,
  },
];

export const video = (state = initialStateVideo, action: addLocalPatcActionType) => {
  switch (action.type) {
    case VideoTypes.ADD_LOCAL_PATCH: {
      const result = state.map((itemArray) => {
        return itemArray.id === action.payload.id
          ? { ...itemArray, pathLocal: action.payload.pathLocal }
          : itemArray;
      });
      return result;
    }
    default:
      return state;
  }
};
