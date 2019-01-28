import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import TextField from './components/TextField';
import { validate } from 'common/utils/validators';
import Submit from './components/Submit';
import styles from './styles';

interface Props {
  onSubmit(values: any): void
}

class Form extends React.Component<InjectedFormProps<{}, Props> & Props> {
  render() {
    const { handleSubmit, onSubmit } = this.props;

    return(
      <View style={styles.formContainer} >
        <Field
          name={'detail'}
          component={TextField}
          onSubmit={handleSubmit(onSubmit)} />
        <Submit
          onSubmit={handleSubmit(onSubmit)} />
      </View>
    );
  }
}

export default reduxForm<{}, Props>({
  form: 'todoForm',
  validate
})(Form);