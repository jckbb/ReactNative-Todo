import React from 'react';
import { View, FlatList, ListRenderItemInfo } from 'react-native';
import styles from './styles';
import TodoItem from './components/Item/index';
import TodoCollection from 'common/components/Todos';

interface Props {

};

class TodoList extends React.Component<Props> {
  renderItem({ item }: ListRenderItemInfo<string>) {
    return(
      <TodoItem id={item} />
    );
  }

  keyExtractor(item: string, index: number) {
    return index.toString();
  }

  itemSeparatorComponent() {
    return(<View style={styles.divider} />);
  }

  render() {
    return(
      <TodoCollection>
        {(injectedProps) => 
          <View style={styles.listContainer} >
            <FlatList
              data={injectedProps.data}
              renderItem={this.renderItem}
              keyExtractor={this.keyExtractor}
              ItemSeparatorComponent={this.itemSeparatorComponent}
            />
          </View>
        }
      </TodoCollection>
    );
  }
}

export default TodoList;
