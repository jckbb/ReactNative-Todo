import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import * as color from 'res/colors';

type Style = {
  container: ViewStyle,
  text: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    height: 55,
    backgroundColor: color.primaryColor,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: color.secondaryTextColor
  }
});