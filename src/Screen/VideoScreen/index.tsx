import React, { FC } from 'react';
import { VideoScreenProps } from './types';
import { TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-svg';
import { createStyles } from './style';
import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
// import Video from 'react-native-video';

export const VideoScreen: FC<VideoScreenProps> = () => {
  const onPress = () => console.log('hello');
  const Styles = useThemeAwareObject(createStyles);
  return (
    <View style={Styles.container}>
      <Text>Video</Text>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text>download</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPress} style={Styles.button}>
        <Text>open</Text>
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
