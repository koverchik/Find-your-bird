import React, { FC } from 'react';
import { View, Text, Switch, TouchableOpacity } from 'react-native';
import { Avatar } from '@root/Components/Avatar';
import { useThemeAwareObject } from '@theme/ThemeAwareObject.hook';
import { createStyles } from './style';
import { SettingsScreenViewProps } from './type';

export const SettingsScreenView: FC<SettingsScreenViewProps> = (props) => {
  const Styles = useThemeAwareObject(createStyles);

  return (
    <View style={Styles.container}>
      <View>
        <View style={Styles.wrapperProfile}>
          <Avatar color={props.colorAvatarSVG} />
          <View style={Styles.wrappersUserData}>
            <Text style={Styles.settingsText}>{props.firstName}</Text>
            <Text style={Styles.settingsText}>{props.lastName}</Text>
            <Text style={Styles.settingsText}>{props.email}</Text>
          </View>
        </View>
        <View style={Styles.settingsItem}>
          <Text style={Styles.settingsText}>{props.theme}</Text>
          <Text style={Styles.settingsText}>{props.themeName}</Text>
          <Switch
            trackColor={props.trackColor}
            thumbColor={props.thumbColor}
            onValueChange={props.onValueChange}
            value={props.isDarkEnabled}
          />
        </View>
      </View>
      <TouchableOpacity style={Styles.button} onPress={props.onPress}>
        <Text style={Styles.settingsText}>{props.buttonLogOut}</Text>
      </TouchableOpacity>
    </View>
  );
};
