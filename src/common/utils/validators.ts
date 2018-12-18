export const validate = (values: any) => {
  const errors = <{todoTask: string}>{todoTask: ''};

  if(!values.todoTask) {
    errors.todoTask = 'Required';
  }

  return errors;
}