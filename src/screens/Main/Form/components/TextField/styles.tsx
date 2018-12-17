import { StyleSheet, ViewStyle } from 'react-native';

interface Style {
  fieldContainer: ViewStyle
};

export default StyleSheet.create<Style>({
  fieldContainer: {
    height: 55,
    width: '100%'
  }
});