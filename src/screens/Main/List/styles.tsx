import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
  listContainer: ViewStyle,
  divider: ViewStyle
};

export default StyleSheet.create<Style>({
  listContainer: {
    flex: 1,
  },
  divider: {
    height: 5
  }
});