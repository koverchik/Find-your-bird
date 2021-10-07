import React, { FC, useState } from 'react';
import { propsVideo, VideoScreenProps } from './types';
import { FlatList, SafeAreaView, View } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
import Video from 'react-native-video';
import { useAppSelector } from '@redux/hooks';
import { getVideo } from '@root/Redux/selectors';
import { RenderItemVideo } from '@root/Components/RenderItemVideo';
import { ListRenderItem } from 'react-native';

export const VideoScreen: FC<VideoScreenProps> = () => {
  const Styles = useThemeAwareObject(createStyles);

  const [isVideo, setIsVideo] = useState(false);

  const dataVideo = useAppSelector(getVideo);

  const [patchVideo, setPatchVideo] = useState<string>();

  const onPressOpen = (patch: string) => {
    setPatchVideo(patch);
    setIsVideo(true);
  };

  const videoPlayer = React.useRef(null);

  const renderItem: ListRenderItem<propsVideo> = ({ item }) => (
    <RenderItemVideo
      title={item.title}
      pathLocal={item.pathLocal}
      uri={item.uri}
      id={item.id}
      onPressOpen={onPressOpen}
    />
  );

  return (
    <View style={Styles.container}>
      <SafeAreaView style={Styles.flatList}>
        <FlatList data={dataVideo} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </SafeAreaView>
      {isVideo ? (
        <Video
          source={{
            uri: patchVideo,
          }}
          resizeMode="contain"
          ref={videoPlayer}
          controls={true}
          style={Styles.videoWrapper}
        />
      ) : null}
    </View>
  );
};
