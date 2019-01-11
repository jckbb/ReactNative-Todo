import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { primaryBackgroundColor } from 'res/colors';

interface Style {
  container: ViewStyle,
  clearButtonContainer: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: Platform.OS === 'ios' ? 40 : 10,
    backgroundColor: primaryBackgroundColor
  },
  clearButtonContainer: {
    marginTop: 10,
    alignItems: 'center'
  }
});