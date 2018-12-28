import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { primaryHighlightColor } from 'res/colors';

interface Style {
  emptyContainer: ViewStyle,
  message: TextStyle
};

export default StyleSheet.create<Style>({
  emptyContainer: {
    flex: 1,
    marginBottom: 55,
    justifyContent: 'center',
    alignItems: 'center'
  },
  message: {
    fontSize: 30,
    fontWeight: '800',
    color: primaryHighlightColor
  }
});