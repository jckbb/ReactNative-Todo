import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  radioButtonContainer: ViewStyle
};

export default StyleSheet.create<Style>({
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});