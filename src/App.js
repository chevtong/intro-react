import "./App.css";
import React, { useState, useEffect } from "react";

//importing components
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [todos, setTodos] = useState([]);

  //this is the name to show in the key of your broswer's application
  const LSKEY = "todoApp";

  //with a empty second parameter, the useEffect will run only once when the page is loaded
  //if the localstorage is not empty, grab the todos array and use setTodos to put in state
  useEffect(() => {

    if (localStorage.getItem(LSKEY) != null) {
        
      let localTodo = JSON.parse(localStorage.getItem(LSKEY));
      
      setTodos(localTodo);

    }
  }, []);

  //second parameter [todos] will trigger the useEffect when a change to the todos state
  //the useEffect will run to setItem in localstorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);



  return (
    <div className="App">
      <h1>TO DO LIST</h1>

      <Form
        //need to pass the props to the components, so we can use inside it
        todos={todos}
        setTodos={setTodos}
      />

      <List todos={todos} />
    </div>
  );
}

export default App;
