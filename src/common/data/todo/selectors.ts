import { createSelector } from 'reselect';
import { ApplicationState } from '../../store';

const selectTodoByAllIds = (state: ApplicationState) => state.todo.allIds;
const selectAllTodos = (state: ApplicationState) => state.todo.byId;
const selectTodosById = (state: ApplicationState, props: {id: string}) => state.todo.byId[props.id];

export const selectAllTodoByDate = createSelector([selectTodoByAllIds, selectAllTodos], 
  (ids, todos) => ids.sort((a: string, b: string) => {
    const aDate = todos[a].createdAt;
    const bDate = todos[b].createdAt;

    if (aDate < bDate) return -1;
    else if (aDate > bDate) return 1;
    else return 0;
  })
);

export const selectTodoById = () => createSelector(selectTodosById, (todo) => todo);