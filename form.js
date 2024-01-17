function TodoForm({addTodo}) {
      // Adding new variable which is a managed variable
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    // prevent reloading of the page
    e.preventDefault();
    // check for existing value
    if (!value) return
    // construct new list using existing list plus new todo
    addTodo(value);
    // clear out the form
    setValue('');
  }
    
  return (
    /* creating form that has an input element for user to enter value. When form is submitted we handle event with handleSubmit*/
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            className="input" 
            value={value}
            placeholder="Add todo..press enter"
            onChange={e => setValue(e.target.value)}
            />
    </form>
    );
}

// export default <TodoForm />;