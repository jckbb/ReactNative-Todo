import { StyleSheet, ViewStyle } from 'react-native';
import { primaryContainerColor } from 'res/colors';

interface Style {
  formContainer: ViewStyle
}

export default StyleSheet.create<Style>({
  formContainer: {
    flexDirection: 'row',
    height: 55,
    borderRadius: 15,
    paddingHorizontal: 5,
    backgroundColor: primaryContainerColor
  }
});