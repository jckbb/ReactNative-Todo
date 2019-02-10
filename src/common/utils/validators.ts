export const validateTodoForm = (values: any) => {
  let errors = {};

  if(!values.detail)
    errors = {detail: 'Required'};

  return errors;
}