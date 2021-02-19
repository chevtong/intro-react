import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

//get the props from App.js, will need both todos and setTodos here
const Form = ({ todos, setTodos, isAdding,setIsAdding}) => {

  //useRef can take the entry of the input
  const inputRef = useRef();

  const submitHandler = () => {
    const name = inputRef.current.value;

    //if it is an empty string in value, return and do not do anything
    if (name === "") return;
    // console.log(name)
    // console.log(todos)

    //use setTodos to change the current todos statue
    //first, combine the current todos by ...todos
    //then, add the new input by getting the name(the name we set above), adding the complete boolean and id
    setTodos([...todos, { name: name, complete: false, id: uuidv4() }]);

    //give back a empty string to the input
    inputRef.current.value = null;
  };

  const addTodoHandler = () =>{
    //console.log(isAdding)
    setIsAdding(isAdding? false : true)
  
  }



  return (
    <div>
    <button type="submit" className="newtodo-btn" onClick={addTodoHandler}>
    <i className="fas fa-plus"></i>
  </button>
    <div className={isAdding ? 'form': 'not-active-form'} >
     
      
      <h2>ADD A NEW ONE</h2>
      <input 
        className="newitem-input" 
        type="text" 
        ref={inputRef}
        //when the enterkey is pressed will execute the submitHandler as well 
        onKeyPress={(e)=>{if (e.key === "Enter") {submitHandler()}}} 
      />

      <button onClick={submitHandler} type="submit" className="addtodo-btn">
        <i className="fas fa-plus"></i>
      </button>



    </div>
    </div>
    
  );
};

export default Form;
