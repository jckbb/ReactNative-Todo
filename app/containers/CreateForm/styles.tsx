import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Style = {
  container: ViewStyle,
  titleTextBox: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 10
  },
  titleTextBox: {
    lineHeight: 35,
    fontSize: 30,
    fontWeight: '500'
  }
});