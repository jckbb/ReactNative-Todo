import { StyleSheet, TextStyle } from 'react-native';

type Style = {
  headerText: TextStyle
};

export default StyleSheet.create<Style>({
  headerText: {
    lineHeight: 25,
    fontSize: 20,
  }
});