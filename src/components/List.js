import React, {useState} from 'react';

function List() {

  const initalTodos = [
    {id: 1, name: '1st todo', complete: false},
    {id: 2, name: '2nd todo', complete: false},
    {id: 3, name: '3rd todo', complete: false},
  ];
  
  const [todos, setTodos] = useState(initalTodos);
  
  

  return (

    <ul>
      {todos.map((todo)=>(

        //have to put an id/index for the items in react
        <li key={todo.id}>
          <input type="checkbox" /> {todo.name}
        </li>
      ))}
    </ul>
  )
}

export default List
