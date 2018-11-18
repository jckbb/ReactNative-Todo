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

  async setItem(data: Todo): Promise<Todo> {
    return await AsyncStorage.setItem(`@Todo/${data.id}`, JSON.stringify(data))
      .then(() => {
        return data;
      });
  }

  async deleteItem(id: string): Promise<string> {
    return await AsyncStorage.removeItem(`@Todo/${id}`)
      .then(() => {
        return id;
      });
  }

  async getAllItems(): Promise<Todo[]> {
    return await AsyncStorage.getAllKeys()
      .then((keys: string[]) => {
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
}

export default new Storage();