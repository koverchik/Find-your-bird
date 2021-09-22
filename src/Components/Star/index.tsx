import React, { FC } from 'react';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@theme/Theme.context';
import { StarProps } from '@components/Star/types';

export const Star: FC<StarProps> = ({ addFavoriteAirportOnPress, isFavoriteAirport }) => {
  const Styles = useThemeAwareObject(createStyles);
  const { theme } = useTheme();

  return (
    <TouchableOpacity style={Styles.touchableOpacity} onPress={addFavoriteAirportOnPress}>
      <FontAwesomeIcon
        icon={faStar}
        color={isFavoriteAirport ? theme.color.background : theme.color.surface}
        size={25}
        style={Styles.favoriteIcon}
      />
    </TouchableOpacity>
  );
};
