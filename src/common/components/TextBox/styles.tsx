import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { primaryBackgroundColor, primaryTextColor } from 'res/colors';

type Style = {
  container: ViewStyle,
  textBox: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    height: 55,
    paddingLeft: 12,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 12,
    backgroundColor: primaryBackgroundColor
  },
  textBox: {
    lineHeight: 35,
    fontSize: 30,
    fontWeight: '500',
    color: primaryTextColor
  }
});