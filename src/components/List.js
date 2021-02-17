import React from "react";
import Item from "./Item";

function List({ todos, setTodos }) {


  
  return (
    <div className="list">
      <ul>
        {todos.map((todo) => (
          <Item 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo} 
          />
        ))}
      </ul>

      <p>{todos.filter((todo) => !todo.complete).length} item(s) to be done </p>
    </div>
  );
}

export default List;
