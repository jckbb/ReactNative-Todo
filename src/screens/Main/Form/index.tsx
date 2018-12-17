import * as React from 'react';
import { View } from 'react-native';
import { reduxForm, Field, InjectedFormProps } from 'redux-form';
import TextField from './components/TextField';
import { validate } from 'common/utils/validators';
import Submit from './components/Submit';

interface Props {
  onSubmit(values: any): void
}

class Form extends React.Component<InjectedFormProps<{}, Props> & Props> {
  render() {
    return(
      <View >
        <Field          
          name={'todoTask'}
          component={TextField} />
        <Submit 
          onSubmit={this.props.handleSubmit(this.props.onSubmit)} />
      </View>
    );
  }
}

export default reduxForm<{}, Props>({
  form: 'todoForm',
  validate
})(Form);