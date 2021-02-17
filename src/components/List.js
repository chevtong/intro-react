import React from "react";

function List({ todos, setTodos }) {

  //get the id from the selected item then pass it to the function
  //create a new array from ...todos (a safer way to change the values of state)
  // filter it by getting the id is not matching
  //then use setTodos to push to the state
  const deleteHandler = (id) => {
    let originalArray = [...todos];

    let newArray = originalArray.filter((item) => item.id !== id);

    //console.log(newArray);

    setTodos(newArray);
  };

  //get the id from the selected item then pass to the function
  //grab the todos from props, then use map to loop thru
  //find the one with the same id and change it to the opposite
  const completeHandler = (id) => {

    let newArray = [...todos];

    newArray.map((item) => {
      if(item.id == id){
        item.complete =! item.complete
      }
    })
   
    //without setTodos, the UI of checkbox will not be changed
    //since we set the input checked value to {todo.complete}
    setTodos(newArray)

  };

  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input checked={todo.complete} onChange={() => completeHandler(todo.id)} 
              type="checkbox" />

            {todo.name}

            <button
              onClick={() => deleteHandler(todo.id)}
              className="trash-btn"
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <p>{todos.filter((todo) => !todo.complete).length} item(s) to be done </p>
    </div>
  );
}

export default List;
