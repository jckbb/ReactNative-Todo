import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
  createContainer: ViewStyle,
};

export default StyleSheet.create<Style>({
  createContainer: {
    flex: 1,
    paddingHorizontal: 10
  },
});