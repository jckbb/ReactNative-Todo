import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { WrappedFieldProps } from 'redux-form';
import styles from './styles';
import Error from '../Error';

interface Props {
  name: "todoTask";
  component: typeof TextField;
};

class TextField extends React.Component<WrappedFieldProps & Props> {
  render() {
    const { input, meta: { submitFailed } } = this.props;

    return(
      <View>
        {submitFailed && <Error>{'Required'}</Error>}
        <TextInput
          style={styles.fieldContainer}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          placeholder={'todo task'}
        />
      </View>
    );
  }
}

export default TextField;