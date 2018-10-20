import { StyleSheet, ViewStyle, TextStyle } from 'react-native';

type Style = {
  container: ViewStyle,
  text: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: 55,
    backgroundColor: '#10ac84',
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 12,
    borderBottomLeftRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 30,
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)'
  }
});