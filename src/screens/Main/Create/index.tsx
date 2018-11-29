import * as React from 'react';
import { View } from 'react-native';
import styles from './styles';
import { createStrings as string } from 'res/strings';
import Header from 'common/components/Header';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createRequest } from 'common/data/todo/actions';
import CreateForm from './Form';

interface PropsFromDispatch {
  createTodo: typeof createRequest
};

type AllProps = PropsFromDispatch;

class Create extends React.Component<AllProps> {
  render() {
    return(
      <View style={styles.createContainer} >
        <Header>
          {string.headerText}
        </Header>
        <CreateForm
          create={this.props.createTodo} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  createTodo: (title: string) => dispatch(createRequest(title))
});

export default connect(null, mapDispatchToProps)(Create);