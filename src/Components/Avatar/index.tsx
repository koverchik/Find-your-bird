import React, { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStyles } from './style';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { AppDispatch } from '../../Redux/store';
import { useDispatch } from 'react-redux';
import { uploadIcon } from '../../Redux/action/auth/index';
import { useAppSelector } from '../../Redux/hooks';
import { getAuth } from '../../Redux/selectors';
import { launchImageLibrary } from 'react-native-image-picker';
import { SVGAvatar } from '../SVGAvatar/index';
import { AvatarProps } from './type';

export const Avatar: FC<AvatarProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);

  const { userIcon } = useAppSelector(getAuth);

  const dispatch: AppDispatch = useDispatch();

  const onPressIconUser = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
      },
      (response) => {
        if (response.assets) {
          const source = response.assets[0].uri;
          if (source) {
            dispatch(uploadIcon(source));
          }
        }
      },
    );
  };
  return (
    <TouchableOpacity onPress={onPressIconUser}>
      {userIcon ? (
        <Image source={{ uri: userIcon }} style={Styles.iconUser} />
      ) : (
        <SVGAvatar height={80} width={80} color={props.color} />
      )}
    </TouchableOpacity>
  );
};
