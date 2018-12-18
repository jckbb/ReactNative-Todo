import { StyleSheet, TextStyle } from 'react-native';

interface Style {
  text: TextStyle
};

export default StyleSheet.create<Style>({
  text: {
    fontSize: 14,
    color: 'red'
  }
});