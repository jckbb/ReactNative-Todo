import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  container: ViewStyle,
  text: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    marginLeft: 7,
    fontSize: 20,
    fontWeight: '400'
  }
});