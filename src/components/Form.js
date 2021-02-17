import React,{useRef} from "react";

//get the props from App.js, will need both todos and setTodos here
const Form = ({todos, setTodos}) => {

    //useRef can take the entry of the input
    const inputRef = useRef();
   
    const submitHandler = (e)=> {

        const name = inputRef.current.value

        //if it is an empty string in value, return and do not do anything
        if (name === "") return

        // console.log(name)
        // console.log(todos)

        //use setTodos to change the current todos statue
        //first, combine the current todos by ...todos
        //then, add the new input by getting the name(the name we set above), adding the complete boolean and id 
        setTodos([ ...todos, {name: name, complete: true, id: Math.random()*1000}])
           
        //give back a empty string to the input
        inputRef.current.value = null

    }

  return (
    <div className="form">
      <input ref={inputRef} type="text" />
      <button onClick={submitHandler} type="submit">
        <i className="fas fa-plus"></i>
      </button>
    </div>
  );
};

export default Form;
