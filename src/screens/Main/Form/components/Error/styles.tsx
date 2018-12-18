import { StyleSheet, TextStyle } from 'react-native';
import { primaryWarningTextColor } from 'res/colors';

interface Style {
  text: TextStyle
};

export default StyleSheet.create<Style>({
  text: {
    fontSize: 14,
    color: primaryWarningTextColor
  }
});