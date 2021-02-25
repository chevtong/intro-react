import "./App.css";
import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

//Importing components
import Form from "./components/Form";
import Edit from "./components/Edit";
import View from "./components/View";

function App() {
  const templateTodos = [
    { name: "do the laundry", complete: false, id: uuidv4() },
  ];

  const [todos, setTodos] = useState([]);

  //use to show the add new item section
  const [isAdding, setIsAdding] = useState(false);

  //create 2 more status to track the change of statusDisplay (ALL/Complete/Incomplete)
  //and showing the complete/incomplete items accordingly
  const [statusDisplay, setStatusDisplay] = useState("all");
  const [categorizedTodos, setCategorizedTodos] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editItem, setEditItem] = useState([]);

  //this is the name to show in the key of your broswer's application
  const LSKEY = "todoApp";
  //with a empty second parameter, the useEffect will run only once when the page is loaded
  //if the localstorage is not empty, grab the todos array and use setTodos to put in state
  useEffect(() => {

    let localTodos = JSON.parse(localStorage.getItem(LSKEY));

    if (localTodos.length > 0) {
      setTodos(localTodos);
    } else {
      setTodos(templateTodos);
    }
  }, []);

  //second parameter [todos] will trigger the useEffect when a change to the todos state
  //the useEffect will run to setItem in localstorage
  useEffect(() => {
    window.localStorage.setItem(LSKEY, JSON.stringify(todos));
  }, [todos]);

  //to show the plus button on the top left of page with plus / back sign
  const addTodoHandler = () => {
    setIsAdding(isAdding ? false : true);
  };

  return (
    <div className="App">

      <div className="circle1"></div>
      <div className="circle2"></div>

      {isAdding ?       
        <button type="submit" className="newtodo-btn" onClick={addTodoHandler}>
        <i class="fas fa-arrow-left"></i>
        </button> : 
        <button type="submit" className="newtodo-btn" onClick={addTodoHandler}>
        <i className="fas fa-plus"></i>
        </button>
      }

      <Form
        todos={todos}
        setTodos={setTodos}
        isAdding={isAdding}
        setIsAdding={setIsAdding}
      />

      <div className="list">
        <h1 className="title-list">MY TO DO LIST</h1>

        {isEditing ? 
          <Edit 
          todos={todos}
          setTodos={setTodos}
          setIsEditing={setIsEditing} 
          editItem={editItem}
          setEditItem={setEditItem}/> 
          :   
          <View
          todos={todos}
          setTodos={setTodos}
          statusDisplay={statusDisplay}
          setStatusDisplay={setStatusDisplay}
          categorizedTodos={categorizedTodos}
          setCategorizedTodos={setCategorizedTodos}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
          editItem={editItem}
          setEditItem={setEditItem}/>
        }
      </div>
    </div>
  );
}

export default App;
