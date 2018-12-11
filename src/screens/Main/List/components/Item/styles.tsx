import { StyleSheet, ViewStyle } from 'react-native';
import { todoList } from 'res/theme';

type Style = {
  container: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    height: todoList.itemHeight,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  }
});