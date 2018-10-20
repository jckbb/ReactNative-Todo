import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
  container: ViewStyle,
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    marginTop: 30,
    paddingHorizontal: 15
  }
});