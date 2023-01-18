// import TodoForm from "form.";

function App(){

  // initial state
  const [todos, setTodos] = React.useState([
    // {
    //   text: 'Learn react',
    //   isCompleted: false,
    // },
    // {
    //   text: 'Meet Mike for lunch',
    //   isCompleted: false,
    // },
    // {
    //   text: 'Build todo app',
    //   isCompleted: false,
    // }, 
    // {
    //   text: 'Use state for personal gain',
    //   isCompleted: false,
    // }, 
  ]);


const addTodo = text => {
  const newTodos = [...todos, {text:text, isCompleted:false}];
  // going from current state to new state
  setTodos(newTodos);
}


const removeTodo = e => {
    const index = Number(e.target.id);
    // temporary list as current list of todos
    let temp = [...todos];
    // go to index in array and remove 1 item
    temp.splice(index, 1);
    // current state to new state
    setTodos(temp);
  }
  // write jsx so the above displays in the browser, writitng a loop to go through the list
  return(<>
      {todos.map((todo, i) => <div className="todo" key={i} id={i} onClick={removeTodo}>{todo.text}</div>)}
      <TodoForm addTodo={addTodo} />
    </>);
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
