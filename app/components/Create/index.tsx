import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import Button from '../Button/index';
import TextBox from '../TextBox/index';

type Props = {};
type State = {};

class Create extends React.Component<Props, State> {
  render() {
    return(
      <View style={styles.container} >
        <TextBox 
          onChangeText={(text) => {console.log(text);}} />
        <Button onPress={() => {console.log('button pressed');}} >{'add'}</Button>
      </View>
    );
  }
}

export default Create;