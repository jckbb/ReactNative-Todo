import { AsyncStorage } from 'react-native';
import { Todo } from '../data/todo/types';

class Storage {
  async getItem(id: string): Promise<Todo> {
    return await AsyncStorage.getItem(`@Todo/${id}`)
      .then((json) => {
        if(json)
          return JSON.parse(json);
      });
  }

  async setItem(data: Todo): Promise<void> {
    await AsyncStorage.setItem(`@Todo/${data.id}`, JSON.stringify(data));
  }

  async deleteItem(id: string): Promise<void> {
    await AsyncStorage.removeItem(`@Todo/${id}`);
  }

  async getAllItems(): Promise<Todo[] | string> {
    return await AsyncStorage.getAllKeys()
      .then((keys: string[]) => {
        if(keys.length == 0)
          throw('todo does not exist');

        const fetchkeys = keys.filter((key) => {
          return key.startsWith('@Todo/');
        });

        return AsyncStorage.multiGet(fetchkeys);
      }).then((result) => {
        return result.map((response) => {
          return JSON.parse(response[1]);
        });
      });
  }

  async deleteAllItems(): Promise<void> {
    await AsyncStorage.clear();
  }
}

export default new Storage();