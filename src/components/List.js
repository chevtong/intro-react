import React from 'react';

function List({todos}) {


  return (
    <div className="list">
    <ul>
      {todos.map((todo)=>(

        //have to put an id/index for the items in react
        <li key={todo.id}>
          <input type="checkbox" checked={todo.complete}/> 
          {todo.name}
        </li>
      ))}
    </ul>

    <p>{todos.filter( todo => !todo.complete).length} item(s) to be done </p>

    </div>
  )
}

export default List
