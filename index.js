function App(){

  // initial state
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn react',
      isCompleted: false,
    },
    {
      text: 'Meet Mike for lunch',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    }, 
    {
      text: 'Use state for personal gain',
      isCompleted: false,
    }          
  ]);

  // Adding new variable which is a managed variable
  const [value, setValue] = React.useState('');

  const handleSubmit = e => {
    // prevent reloading of the page
    e.preventDefault();
    // check for existing value
    if (!value) return
    // construct new list using existing list plus new todo
    const newTodos = [...todos, {text:value, isCompleted:false}];
    // going from current state to new state
    setTodos(newTodos);
    // clear out the form
    setValue('');
  }

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos];
    // go to indexs in array and remove 1 item
    temp.splice(index, 1);
    setTodos(temp);
  }
  // write jsx so the above displays in the browser, writitng a loop to go through the list
  return(<>
      {todos.map((todo, i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
      {/* creating form  that has an input element for user to enter value. When form is submitted we handle event with handleSubmit*/}
      <form onSubmit={handleSubmit}>
        <input 
        type="text" 
        className="input" 
        value={value}
        placeholder="Add todo ..."
        onChange={e => setValue(e.target.value)}
        />
      </form>
    </>);
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
