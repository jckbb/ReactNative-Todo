import React from 'react';
import { TextInput, View } from 'react-native';
import { WrappedFieldProps } from 'redux-form';
import styles from './styles';
import Error from '../Error';

interface Props {
  name: "detail",
  component: typeof TextField
};

class TextField extends React.Component<WrappedFieldProps & Props> {
  render() {
    const { input, meta: { submitFailed, valid, error } } = this.props;

    return(
      <View style={styles.fieldContainer} >
        <TextInput
          style={styles.field}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          placeholder={'todo'}
          value={input.value} />
         {(submitFailed && !valid) && <Error>{error}</Error>}
      </View>
    );
  }
}

export default TextField;