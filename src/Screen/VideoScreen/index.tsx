import React, { FC } from 'react';
import { VideoScreenProps } from './types';
import { Text, TouchableOpacity, View } from 'react-native';

import { createStyles } from './style';
import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
import Video from 'react-native-video';

export const VideoScreen = () => {
  const onPress = () => console.log('hello');

  const Styles = useThemeAwareObject(createStyles);
  return (
    <View style={Styles.container}>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text style={Styles.text}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text style={Styles.text}>Open</Text>
      </TouchableOpacity>
      {/* <Video
        source={{
          uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4',
        }}
        //  onBuffer={this.onBuffer}
        //  onError={this.videoError}
        style={Styles.container}
      /> */}
    </View>
  );
};
