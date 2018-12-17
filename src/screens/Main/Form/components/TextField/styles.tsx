import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  fieldContainer: ViewStyle,
  field: TextStyle
};

export default StyleSheet.create<Style>({
  fieldContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  field: {
    flex: 1,
    paddingLeft: 3,
    margin: 1,
    fontSize: 18
  }
});