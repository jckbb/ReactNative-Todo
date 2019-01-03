import { StyleSheet, ViewStyle } from 'react-native';
import { todoList } from 'res/theme';

type Style = {
  container: ViewStyle
};

export default StyleSheet.create<Style>({
  container: {
    flexDirection: 'row',
    height: todoList.itemHeight,
    alignItems: 'center'
  }
});