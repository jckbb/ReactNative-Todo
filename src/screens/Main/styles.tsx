import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  container: ViewStyle,
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 30,
  }
});