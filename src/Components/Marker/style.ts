import { StyleSheet } from 'react-native';

const TRANSLATE_Y_SVG_ICON_MARKER = -40;
const TRANSLATE_X_SVG_ICON_MARKER = -20;

export const createStyles = () => {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      margin: 0,
      padding: 0,
      height: 40,
      width: 40,
      transform: [
        { translateY: TRANSLATE_Y_SVG_ICON_MARKER },
        { translateX: TRANSLATE_X_SVG_ICON_MARKER },
      ],
    },
  });
  return styles;
};
