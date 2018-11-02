import * as React from 'react';
import { View } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Button from '../../components/Button/index';
import TextBox from '../../components/TextBox/index';
import * as string from '../../constant/strings';
import styles from './styles';
import { ApplicationState } from '../../store';
import { updateRequest, clearRequest } from './data/actions';
import { Create } from './data/types'; 

interface PropsFromState {
  loading: boolean,
  error?: string,
  data: Create
};

interface PropsFromDispatch {
  updateRequest: typeof updateRequest,
  clearRequest: typeof clearRequest
};

type AllProps = PropsFromDispatch & PropsFromState;

class CreateForm extends React.Component<AllProps> {
  handleChange(text: string) {
    this.props.updateRequest(text);
  }

  submit() {
    this.props.clearRequest();
  }

  render() {
    const { title } = this.props.data;

    return(
      <View style={styles.container} >
        <TextBox
          placeholder={string.createTodoPlaceholder}
          value={title}
          handleTextChange={this.handleChange.bind(this)} />
        <Button onPress={this.submit.bind(this)}>{string.addTodoButtonText}</Button>
      </View>
    );
  }
}

const mapStateToProps = ({ create }: ApplicationState) => ({
  loading: create.loading,
  error: create.error,
  data: create.data
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateRequest: (title: string) => dispatch(updateRequest(title)),
  clearRequest: () => dispatch(clearRequest())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateForm);