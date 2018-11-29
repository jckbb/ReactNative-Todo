import { StyleSheet, ViewStyle } from 'react-native';

type Style = {
  formContainer: ViewStyle,
  textBox: ViewStyle,
  submitButton: ViewStyle
};

export default StyleSheet.create<Style>({
  formContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  textBox: {
    flex: 2
  },
  submitButton: {
    flex: 1
  }
});