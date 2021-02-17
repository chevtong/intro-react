import React from 'react';

function List({todos, setTodos}) {
  
  // const deleteHandler = (e) =>{
  //   console.log(e.id)
  // }

  return (
    <div className="list">
    <ul>
      {todos.map((todo)=>(

        //have to put an id/index for the items in react
        <li key={todo.id}>
          <input type="checkbox" checked={todo.complete}/> 
          {todo.name}
          <button className="trash-btn"><i className="fas fa-trash"></i></button>

        </li>
      ))}
    </ul>

    <p>{todos.filter( todo => !todo.complete).length} item(s) to be done </p>

    </div>
  )
}

export default List
