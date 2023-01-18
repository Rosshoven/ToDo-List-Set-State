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
  ])

  // write jsx so the above displays in the browser, writitng a loop to go through the list
  return(
    <>
      {todos.map((todo, i) => <div className="todo" key={i}>{todo.text}</div>)}
    </>
  );
}

ReactDOM.render(
  <App  />,
  document.getElementById('root')
);
