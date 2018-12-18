import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { secondaryTextColor } from 'res/colors';

interface Style {
  button: ViewStyle,
  text: TextStyle
}

const buttonDimensions = 55;

export default StyleSheet.create<Style>({
  button: {
    height: buttonDimensions,
    width: buttonDimensions,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    color: secondaryTextColor,
    fontWeight: '600'
  }
});