import { StyleSheet, ViewStyle } from 'react-native';
import { cornerRadius, todoList } from 'res/theme';
import { primaryContainerColor, primaryHighlightColor } from 'res/colors';

type Style = {
  container: ViewStyle,
  todoContainer: ViewStyle,
  completedContainer: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: todoList.itemHeight,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: cornerRadius,
  },
  todoContainer: {
    backgroundColor: primaryContainerColor,
  },
  completedContainer: {
    backgroundColor: primaryHighlightColor,
  }
});