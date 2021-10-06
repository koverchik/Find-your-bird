import React, { FC, useState } from 'react';
import { propsVideo, VideoScreenProps } from './types';
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '@root/Theme/ThemeAwareObject.hook';
import Video from 'react-native-video';
import RNFS from 'react-native-fs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTheme } from '@root/Theme/Theme.context';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { CircularProgress } from '@root/Components/CircularProgress';

export const VideoScreen: FC<VideoScreenProps> = () => {
  const [progress, setProgress] = useState(0);

  let DATA = [
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
  const { theme } = useTheme();
  const [isVideo, setIsVideo] = useState(false);
  const [patchVideo, setPatchVideo] = useState<string>();
  const [dataList, setDataList] = useState<propsVideo[]>(DATA);

  const onPressOpen = (patch: propsVideo['uri']) => {
    console.log(patch);
    setPatchVideo(patch);
    setIsVideo(true);
  };

  const videoPlayer = React.useRef(null);

  const onPressDownloadFile = (uri: propsVideo['uri'], id: propsVideo['id']) => {
    const timestamp = Date.now();
    const LOCAL_PATH_TO_VIDEO = `file://${RNFS.ExternalDirectoryPath}/mood-pixel-${timestamp}.mp4`;
    RNFS.downloadFile({
      fromUrl: uri,
      progress: (res) => {
        const bytesWrittenPersent = Math.round((res.bytesWritten * 100) / res.contentLength);
        setProgress(bytesWrittenPersent);
        console.log(bytesWrittenPersent);
      },
      toFile: LOCAL_PATH_TO_VIDEO,
    }).promise.then((response) => {
      if (response.statusCode == 200) {
        setProgress(100);
        setPatchVideo(LOCAL_PATH_TO_VIDEO);
        setIsVideo(true);
        const result = dataList.map((itemArray) => {
          return itemArray.id === id ? { ...itemArray, pathLocal: LOCAL_PATH_TO_VIDEO } : itemArray;
        });
        setDataList(result);
        console.log('FILES UPLOADED!'); // response.statusCode, response.headers, response.body
      } else {
        console.log('SERVER ERROR');
      }
    });
  };

  const Styles = useThemeAwareObject(createStyles);

  const onBuffer = (e) => {
    console.log(e);
  };
  const videoError = (e) => {
    console.log(e);
  };

  const Item = ({ title, pathLocal, uri, id }: propsVideo) => (
    <View style={Styles.item}>
      <TouchableOpacity
        style={Styles.item}
        onPress={() => {
          pathLocal == null ? onPressOpen(uri) : onPressOpen(pathLocal);
        }}
      >
        <Text style={Styles.textItem}>{title}</Text>
      </TouchableOpacity>

      <FontAwesomeIcon
        icon={faCheck}
        color={pathLocal == null ? theme.color.surface : theme.color.bright}
      />
      <TouchableOpacity
        style={Styles.buttonDownload}
        onPress={() => {
          onPressDownloadFile(uri, id);
        }}
        disabled={pathLocal != null}
      >
        <Text style={Styles.text}>Download</Text>
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item title={item.title} pathLocal={item.pathLocal} uri={item.uri} id={item.id} />
  );

  return (
    <View style={Styles.container}>
      <SafeAreaView style={Styles.flatList}>
        <FlatList data={dataList} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </SafeAreaView>
      {isVideo ? (
        <Video
          source={{
            uri: patchVideo,
          }}
          ref={videoPlayer}
          controls={true}
          onBuffer={onBuffer}
          onError={videoError}
          style={Styles.videoWrapper}
        />
      ) : null}

      <CircularProgress progress={progress} />
    </View>
  );
};
