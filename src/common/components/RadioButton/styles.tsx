import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { primaryTextColor, primaryColor } from 'res/colors';

interface Style {
  radioButtonContainer: ViewStyle,
  todoText: TextStyle,
  completedText: TextStyle
};

export default StyleSheet.create<Style>({
  radioButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  todoText: {
    flex: 1,
    color: primaryTextColor
  },
  completedText: {
    color: primaryColor
  }
});