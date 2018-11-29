import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';

type Props = {
  children: string
};

class Header extends React.Component<Props> {
  render() {
    return(
      <View >
        <Text style={styles.headerText} >
          {this.props.children}
        </Text>
      </View>
    );
  }
}

export default Header;