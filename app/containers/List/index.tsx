import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from '../../store';
import { Todo } from '../../data/todo/types';
import { fetchRequest } from '../../data/todo/actions';
import styles from './styles';
import Item from './components/Item/index';

interface PropsFromDispatch {
  fetchRequest: typeof fetchRequest
};

interface PropsFromState {
  loading: boolean,
  error?: string,
  data: Todo[]
};

type AllProps = PropsFromDispatch & PropsFromState;

class List extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchRequest();
  }

  renderItem(info: ListRenderItemInfo<Todo>) {
    return(
      <Item data={info.item} />
    );
  }

  keyExtractor(item: Todo, index: number) {
    return index.toString();
  }

  itemSeparatorComponent() {
    return(<View style={styles.divider} />);
  }

  render() {
    const { data } = this.props;

    return(
      <View style={styles.container} >
        <FlatList
          style={styles.list}
          data={data}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.itemSeparatorComponent}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchRequest: () => dispatch(fetchRequest()) 
});

const mapStateToProps = ({ todo }: ApplicationState) => ({
  loading: todo.loading,
  data: todo.data,
  error: todo.error
});

export default connect(mapStateToProps, mapDispatchToProps)(List);