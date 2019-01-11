import React from 'react';
import { TextInput, View } from 'react-native';
import { WrappedFieldProps } from 'redux-form';
import styles from './styles';
import Error from '../Error';

interface Props {
  name: "todoTask";
  component: typeof TextField;
  onSubmit(): void
};

class TextField extends React.Component<WrappedFieldProps & Props> {
  render() {
    const { onSubmit, input, meta: { submitFailed, valid } } = this.props;

    return(
      <View style={styles.fieldContainer} >
        <TextInput
          style={styles.field}
          onChangeText={input.onChange}
          onBlur={input.onBlur}
          placeholder={'todo task'}
          value={input.value}
          onSubmitEditing={onSubmit} />
         {(submitFailed && !valid) && <Error>{'Required'}</Error>}
      </View>
    );
  }
}

export default TextField;