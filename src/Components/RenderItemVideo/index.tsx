import React, { FC, useState } from 'react';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { RenderItemVideoProps } from './type';
import { useTranslation } from 'react-i18next';
import { Text, TouchableOpacity, View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useTheme } from '@root/Theme/Theme.context';
import { CircularProgress } from '../CircularProgress';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { propsVideo } from '@screen/VideoScreen/types';
import RNFS from 'react-native-fs';
import { useAppDispatch } from '@root/Redux/hooks';
import { addLocalPatch } from '@root/Redux/action/video';

export const RenderItemVideo: FC<RenderItemVideoProps> = ({
  title,
  pathLocal,
  uri,
  id,
  onPressOpen,
}) => {
  const Styles = useThemeAwareObject(createStyles);
  const [progress, setProgress] = useState(0);
  const { theme } = useTheme();
  const { t } = useTranslation();
  const [isCircularProgress, setIsCircularProgress] = useState(false);
  const dispatch = useAppDispatch();

  const onPressDownloadFile = (uri: propsVideo['uri'], id: propsVideo['id']) => {
    const timestamp = Date.now();
    const LOCAL_PATH_TO_VIDEO = `file://${RNFS.ExternalDirectoryPath}/mood-pixel-${timestamp}.mp4`;
    setIsCircularProgress(true);

    RNFS.downloadFile({
      fromUrl: uri,
      progress: (res) => {
        const bytesWrittenPersent = Math.round((res.bytesWritten * 100) / res.contentLength);
        setProgress(bytesWrittenPersent);
      },
      toFile: LOCAL_PATH_TO_VIDEO,
    }).promise.then((response) => {
      if (response.statusCode == 200) {
        setProgress(100);
        setIsCircularProgress(false);
        dispatch(
          addLocalPatch({
            id: id,
            pathLocal: LOCAL_PATH_TO_VIDEO,
          }),
        );
        console.log('FILES UPLOADED!');
      } else {
        console.log('SERVER ERROR');
      }
    });
  };

  return (
    <View style={Styles.item}>
      <TouchableOpacity
        style={Styles.item}
        onPress={() => {
          pathLocal == null ? onPressOpen(uri) : onPressOpen(pathLocal);
        }}
      >
        <Text style={Styles.textItem}>{title}</Text>
      </TouchableOpacity>
      <View style={Styles.wrapperDownload}>
        {isCircularProgress ? (
          <CircularProgress progress={progress} />
        ) : (
          <FontAwesomeIcon
            icon={faCheck}
            color={pathLocal == null ? theme.color.surface : theme.color.bright}
          />
        )}

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
    </View>
  );
};
