
import React, {useState,useEffect} from 'react';
// import './App.css';
import TodoForm from './components/TodoForm';
// import Todolist from './components/Todolist';
import './styles/todoform.css'
import './styles/todolist.css'

function App() {
  const [input, setInput]=useState("")
  const [todos, setTodos]=useState([])

  // Crud functions 
  // GET REQUEST
  useEffect(()=> {
    fetch(" http://localhost:4000/todos/")
    .then((r) => r.json())
    .then((data) =>setTodos(data))
    .catch(error => console.error(error))
  },[])

//   // POST REQUEST
// useEffect(()=> {
//   fetch(" http://localhost:4000/todos", {
//     method: "POST",
//     headers: {
//       "content-type": "application/json"
//     },
//     body:JSON.stringify({value: "Babysitting"}),
//   })
//   .then(r => r.json())
// }, [])

  return (
    <div className="App-todo">
   
      <TodoForm 
      input={input}
      setInput={setInput}
      todos={todos}
      setTodos={setTodos}
      
      />
      {/* <Todolist /> */}
    </div>
  );
}

export default App;
