import React,{ useState , useEffect } from 'react';
import './App.css';

//components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  //states
  const [ inputText , setInputText ] = useState("");
  const [ todos , setTodos ] = useState([]);
  const [ status , setStatus ] = useState("all");
  const [ filteredTodos , setFilteredTodos ] = useState([]);

  //useEffect
  useEffect( ()=>{
    filtedHandler();
  },[todos , status ]);

  //functions
  const filtedHandler = () =>{
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
        case 'uncompleted':
          setFilteredTodos(todos.filter(todo => todo.completed === false))
          break;
        default:
          setFilteredTodos(todos);
          break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>My todo list</h1>
      </header>
      <Form 
        setInputText={setInputText} 
        setTodos={setTodos} 
        todos={todos} 
        inputText={inputText}
        status={status}
        setStatus={setStatus} 
        
      />

      <TodoList 
        todos={todos} 
        setTodos={setTodos} 
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
