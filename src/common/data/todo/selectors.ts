import { createSelector } from 'reselect';
import { ApplicationState } from '../../store';

const selectTodoByAllIds = (state: ApplicationState) => state.todo.allIds;
const selectAllTodos = (state: ApplicationState) => state.todo.byId;
const selectTodosById = (state: ApplicationState, props: {id: string}) => state.todo.byId[props.id];

const selectTodoIdsByCompleted = createSelector([selectTodoByAllIds, selectAllTodos], (ids, todos) =>
  ids.filter((id) => {
    if(todos[id].complete)
      return id;
  })
);

const selectTodoIdByUncompleted = createSelector([selectTodoByAllIds, selectAllTodos], (ids, todos) =>
  ids.filter((id) => {
    if(!todos[id].complete)
      return id;
}));

export const selectTodoIdsByTaskOrder = createSelector([selectTodoIdsByCompleted, selectTodoIdByUncompleted], 
  (completedIds, uncompletedIds) => uncompletedIds.concat(completedIds)
);

export const selectTodoById = () => createSelector(selectTodosById, (todo) => todo);