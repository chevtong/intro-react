import React from "react";

function List({ todos, setTodos }) {

  //get the id from the selected item then pass it to the function
  //create a new array from ...todos (a safer way to change the values of state)
  // filter it by getting the id is not matching
  //then use setTodos to push to the state
  const deleteHandler = (id) => {

    let originalArray = [...todos];

    let newArray = originalArray.filter(item => item.id !== id);

    //console.log(newArray);

    setTodos(newArray);
  };

  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
         
          <li key={todo.id}>
            <input type="checkbox" />
            {todo.name}
            <button
              onClick={() => deleteHandler(todo.id)}
              className="trash-btn">
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
