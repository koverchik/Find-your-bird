import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  return (
    <View style={Styles.container}>
      <Text>Details for you!</Text>
    </View>
  );
};
