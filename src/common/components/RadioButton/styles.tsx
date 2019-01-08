import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface Style {
  container: ViewStyle,
  text: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  text: {
    flex: 1,
    flexWrap: 'wrap',
    marginLeft: 7,
    fontSize: 20,
    fontWeight: '400'
  }
});