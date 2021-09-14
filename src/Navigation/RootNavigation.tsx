import React, { FC } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { SettingsNavigation } from './SettingsNavigation';
import { HomeNavigation } from './HomeNavigation';
import { TabNavigationScreen } from './types';
import { TabNavigatorParamList } from './RootStackPrams';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useThemeAwareObject } from '../Theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { useTheme } from '../Theme/Theme.context';
import { TabBarIcon } from './tabBarIcon';
import { useTranslation } from 'react-i18next';
import { useFlipper, useReduxDevToolsExtension } from '@react-navigation/devtools';
import { Animated, Dimensions, SafeAreaView, View } from 'react-native';

// const AnimatedSvg = Animated.createAnimatedComponent();
// const { width } = Dimensions.get('window');
const height = 64;
// const { Path } = Svg;
// const tabWidth = width / 2;
// const backgroundColor = 'white';

// const getPath = (): string => {
//   const left = shape
//     .line()
//     .x((d) => d.x)
//     .y((d) => d.y)([
//     { x: 0, y: 0 },
//     { x: width, y: 0 },
//   ]);
//   const tab = shape
//     .line()
//     .x((d) => d.x)
//     .y((d) => d.y)
//     .curve(shape.curveBasis)([
//     { x: width, y: 0 },
//     { x: width + 5, y: 0 },
//     { x: width + 10, y: 10 },
//     { x: width + 15, y: height },
//     { x: width + tabWidth - 15, y: height },
//     { x: width + tabWidth - 10, y: 10 },
//     { x: width + tabWidth - 5, y: 0 },
//     { x: width + tabWidth, y: 0 },
//   ]);
//   const right = shape
//     .line()
//     .x((d) => d.x)
//     .y((d) => d.y)([
//     { x: width + tabWidth, y: 0 },
//     { x: width * 2, y: 0 },
//     { x: width * 2, y: height },
//     { x: 0, y: height },
//     { x: 0, y: 0 },
//   ]);
//   return `${left} ${tab} ${right}`;
// };
// const d = getPath();

const Tab = createMaterialBottomTabNavigator<TabNavigatorParamList>();

export const RootNavigation: FC = () => {
  const navigationRef = useNavigationContainerRef();

  useFlipper(navigationRef);
  useReduxDevToolsExtension(navigationRef);

  const { theme } = useTheme();
  const Styles = useThemeAwareObject(createStyles);
  const { t } = useTranslation();
  const value = new Animated.Value(0);

  // const translateX = value.interpolate({
  //   inputRange: [0, width],
  //   outputRange: [-width, 0],
  // });
  return (
    <NavigationContainer ref={navigationRef}>
      {/* <View {...{ height, width }}>
        <AnimatedSvg width={width * 2} {...{ height }} style={{ transform: [{ translateX }] }}> */}
      {/* <Path fill={backgroundColor} {...{ d }} /> */}
      {/* </AnimatedSvg> */}
      {/* <View style={StyleSheet.absoluteFill}>
          <StaticTabbar {...{ tabs, value }} />
        </View> */}
      {/* </View> */}
      {/* <SafeAreaView style={styles.container} /> */}
      <View />
      <Tab.Navigator
        initialRouteName={TabNavigationScreen.HomeTab}
        activeColor={theme.color.onPrimary}
        inactiveColor={theme.color.primary}
        barStyle={{
          backgroundColor: Styles.container.backgroundColor,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            return <TabBarIcon route={route} focused={focused} />;
          },
        })}
      >
        <Tab.Screen
          options={{
            tabBarLabel: t('title:HomeScreen'),
          }}
          name={TabNavigationScreen.HomeTab}
          component={HomeNavigation}
        />
        <Tab.Screen
          name={TabNavigationScreen.SettingsTab}
          component={SettingsNavigation}
          options={{
            tabBarLabel: t('title:SettingsScreen'),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
