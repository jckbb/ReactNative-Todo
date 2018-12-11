import { StyleSheet, ViewStyle } from 'react-native';

const dividerHeight = 5;

type Style = {
  listContainer: ViewStyle,
  divider: ViewStyle
};

export default StyleSheet.create<Style>({
  listContainer: {
    flex: 1,
    paddingTop: dividerHeight,
    paddingBottom: dividerHeight
  },
  divider: {
    height: dividerHeight
  }
});