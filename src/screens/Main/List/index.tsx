import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styles from './styles';
import TodoItem from './components/Item/index';
import TodoCollection from 'common/components/Todos';
import Empty from './components/Empty';

interface Props {};

class TodoList extends React.Component<Props> {
  renderItem({ item }: ListRenderItemInfo<string>) {
    return(
      <View>
        <TodoItem id={item} />
      </View>
    );
  }

  keyExtractor(item: string, index: number) {
    return index.toString();
  }

  itemSeparatorComponent() {
    return(<View style={styles.divider} />);
  }

  listEmptyComponent() {
    return(
      <Empty>{'Empty'}</Empty>
    );
  }

  render() {
    return(
      <TodoCollection>
        {(injectedProps) =>
          <View style={styles.listContainer} >
            { injectedProps.count > 0 
              ? <FlatList
                  data={injectedProps.data}
                  renderItem={this.renderItem}
                  keyExtractor={this.keyExtractor}
                  ItemSeparatorComponent={this.itemSeparatorComponent}
                />
              : <Empty>{'Empty'}</Empty>
            }
          </View>
        }
      </TodoCollection>
    );
  }
}

export default TodoList;