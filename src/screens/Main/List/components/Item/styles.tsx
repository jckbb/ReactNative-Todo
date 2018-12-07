import { StyleSheet, ViewStyle } from 'react-native';
import { cornerRadius } from 'res/theme';

type Style = {
  container: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: cornerRadius,
  },
});