import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ApplicationState } from 'common/store';
import { fetchAllRequest } from 'common/data/todo/actions';
import styles from './styles';
import Item from './components/Item/index';

interface PropsFromDispatch {
  fetchAllRequest: typeof fetchAllRequest
};

interface PropsFromState {
  loading: boolean,
  error?: string,
  allIds: string[]
};

type AllProps = PropsFromDispatch & PropsFromState;

class List extends React.Component<AllProps> {
  componentDidMount() {
    this.props.fetchAllRequest();
  }

  renderItem({ item }: ListRenderItemInfo<string>) {
    return(
      <Item id={item} />
    );
  }

  keyExtractor(item: string, index: number) {
    return index.toString();
  }

  itemSeparatorComponent() {
    return(<View style={styles.divider} />);
  }

  render() {
    const { allIds } = this.props;

    return(
      <View style={styles.container} >
        <FlatList
          style={styles.list}
          data={allIds}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.itemSeparatorComponent}
        />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllRequest: () => dispatch(fetchAllRequest())
});

const mapStateToProps = ({ todo }: ApplicationState) => ({
  loading: todo.loading,
  error: todo.error,
  byId: todo.byId,
  allIds: todo.allIds
});

export default connect(mapStateToProps, mapDispatchToProps)(List);