import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { clearButtonColor } from 'res/colors';

interface Style {
  clearContainer: ViewStyle,
  clearText: TextStyle
};

export default StyleSheet.create<Style>({
  clearContainer: {
    width: 120,
    alignItems: 'center',
    backgroundColor: clearButtonColor.background,
    borderRadius: 8,
    padding: 3
  },
  clearText: {
    color: clearButtonColor.text,
    fontSize: 18,
    fontWeight: '400'
  }
});