import React, { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

//get the props from App.js, will need both todos and setTodos here
const Form = ({ todos, setTodos, setStatusDisplay }) => {

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

  //when the enterkey is pressed will execute the submitHandler as well
  //since the if condition cannot put inside the submitHandler
  //it can't be fulfilled if the user press the submit button
  const keyEnterHandler = (e) => {
    if (e.key === "Enter") {
      submitHandler();
    }
  };

  //get the display of statusDisplay - (all/complete/incomplete) from the dropdown menu
  //update it in the state and show the corresponding categorized todo items
  //refer to filterHandler in the List
  const selectHandler = (e) => {
    //console.log(e.target.value)
    setStatusDisplay(e.target.value);
  };


  return (
    <div className="form">
      <input ref={inputRef} type="text" onKeyPress={keyEnterHandler} />
      <button onClick={submitHandler} type="submit" className="addtodo-btn">
        <i className="fas fa-plus"></i>
      </button>
      <div className="select">
        <select onChange={selectHandler}>
          <option value="all">All</option>
          <option value="complete">complete</option>
          <option value="incomplete">incomplete</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
