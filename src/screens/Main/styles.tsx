import { StyleSheet, ViewStyle } from 'react-native';
import { primaryBackgroundColor } from 'res/colors';

interface Style {
  container: ViewStyle,
  clearButtonContainer: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
    marginTop: 30,
    backgroundColor: primaryBackgroundColor
  },
  clearButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
  }
});