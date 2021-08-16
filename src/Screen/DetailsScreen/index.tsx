import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { createStyles } from './style';
import { DetailsScreenProps } from './types';
import { useThemeAwareObject } from '../../Theme/ThemeAwareObject.hook';
import { useTranslation } from 'react-i18next';

export const DetailsScreen: FC<DetailsScreenProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();

  return (
    <View style={Styles.container}>
      <Text>{t('components:textForDetailsScreen')}</Text>
    </View>
  );
};
