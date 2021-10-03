import React, { FC, useRef } from 'react';
import { VideoScreenProps } from './types';
import { Text, TouchableOpacity, View } from 'react-native';

import { createStyles } from './style';
import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
import Video from 'react-native-video';

export const VideoScreen: FC<VideoScreenProps> = () => {
  const onPress = () => console.log('hello');

  const Styles = useThemeAwareObject(createStyles);

  const onBuffer = () => {
    console.log('buffer');
  };
  const videoError = (e) => {
    console.log(e);
  };
  const videoPlayer = React.useRef();

  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text style={Styles.text}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text style={Styles.text}>Open</Text>
      </TouchableOpacity>
      <Video
        source={{
          uri: 'https://assets.mixkit.co/videos/download/mixkit-countryside-meadow-4075.mp4',
        }}
        ref={(ref) => (videoPlayer.current = ref)}
        controls={true}
        onBuffer={onBuffer}
        onError={videoError}
        style={Styles.videoWrapper}
      />
    </View>
  );
};
