import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
  container: ViewStyle,
  divider: ViewStyle,
  list: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 3,
    paddingHorizontal: 5
  },
  divider: {
    height: 5
  },
  list: {
    paddingHorizontal: 5
  }
});