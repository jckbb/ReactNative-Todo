import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import * as color from '../../constant/colors';

type Style = {
  container: ViewStyle,
  text: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: 55,
    backgroundColor: color.primaryColor,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    color: color.secondaryTextColor
  }
});