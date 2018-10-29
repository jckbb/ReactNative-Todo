import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { cornerRadius } from '../../../../constant/theme';

type Style = {
  container: ViewStyle,
  title: TextStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: 55,
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: cornerRadius,
  },
  title: {
    fontSize: 30,
    fontWeight: '500'
  }
});