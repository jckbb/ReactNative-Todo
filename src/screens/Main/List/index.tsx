import React from 'react';
import { View, FlatList, ListRenderItemInfo, Dimensions } from 'react-native';
import styles from './styles';
import TodoItem from './components/Item/index';
import TodoCollection from 'common/components/Todos';
import { todoList } from 'res/theme';

const height = Dimensions.get('window').height;

interface Props {};

class TodoList extends React.Component<Props> {
  renderItem({ item }: ListRenderItemInfo<string>) {
    return(
      <TodoItem id={item} />
    );
  }

  listShouldScroll(itemCount: number) {
    const result = height / (todoList.componentSeparatorHeight + todoList.itemHeight)
    let scroll = false;

    if(itemCount >= result) 
      scroll = true;
      
    return scroll;
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
              scrollEnabled={this.listShouldScroll(injectedProps.data.length)}
            />
          </View>
        }
      </TodoCollection>
    );
  }
}

export default TodoList;