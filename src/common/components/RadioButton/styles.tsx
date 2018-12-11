import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { primaryTextColor } from 'res/colors';

interface Style {
  radioButtonContainer: ViewStyle,
  todoText: TextStyle,
  completedText: TextStyle
};

export default StyleSheet.create<Style>({
  radioButtonContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center'
  },
  todoText: {
    color: primaryTextColor,
    fontSize: 21,
    fontWeight: '600'
  },
  completedText: {
    textDecorationLine: 'line-through'
  }
});