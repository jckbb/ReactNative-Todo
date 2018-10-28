import * as React from 'react';
import { View } from 'react-native';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createRequest } from '../../data/todo/actions';
import Button from '../../components/Button/index';
import TextBox from '../../components/TextBox/index';
import * as string from '../../constant/strings';
import styles from './styles';

type State = {
  title: string
};

interface PropsFromDispatch {
  createRequest: typeof createRequest
}

type AllProps = PropsFromDispatch;

class Create extends React.Component<AllProps, State> {
  constructor(props: AllProps) {
    super(props);
    
    this.state = {
      title: ''
    }
  }

  changeTitle(text: string) {
    this.setState({title: text});
  }

  createTodo(createRequest: any) {
    const title = this.state.title;
    if(title.length == 0)
      return;
    createRequest(title);
    this.setState({title: ''});
  }

  render() {
    const { createRequest } = this.props;

    return(
      <View style={styles.container} >
        <TextBox
          placeholder={string.createTodoPlaceholder}
          onChangeText={this.changeTitle.bind(this)} />
        <Button onPress={() => {this.createTodo(createRequest);}} >{string.addTodoButtonText}</Button>
      </View>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createRequest: (title: string) => dispatch(createRequest(title))
});

export default connect(mapStateToProps, mapDispatchToProps)(Create);