import React, { FC } from 'react';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { VideoStackParamList, VideoStackScreens } from './types';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '@theme/Theme.context';
import { useTranslation } from 'react-i18next';
import { VideoScreen } from '@screen/VideoScreen';
import { FavoriteAirportsScreen } from '@screen/FavoriteAirportsScreen';

const Stack = createStackNavigator<VideoStackParamList>();

export const VideoNavigation: FC = () => {
  const { theme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();

  return (
    <Stack.Navigator>
      <Stack.Screen
        name={VideoStackScreens.Video}
        component={VideoScreen}
        options={{
          title: t('title:VideoScreen'),
          headerStyle: Styles.container,
          headerTintColor: theme.color.primary,
          headerTitleAlign: 'center',
        }}
      />
    </Stack.Navigator>
  );
};
