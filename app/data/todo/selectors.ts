import { createSelector } from 'reselect';
import { ApplicationState } from '../../store';

const getTodos = (state: ApplicationState, props: {id: string}) => state.todo.byId;
const getId = (state: ApplicationState, props: {id: string}) => props.id;

export const makeGetTodoById = () => createSelector([getTodos, getId], (todos, id) => todos[id]);