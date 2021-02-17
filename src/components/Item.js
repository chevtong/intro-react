import React from "react";

function Item({ todo, todos, setTodos }) {

    //to delete an item, need to get the todo.id the item
    //have to get the todo.id after the map 
    const deleteHandler = (id) =>{

        let originalArray = [...todos]

        console.log(originalArray)

        let newArray = originalArray.filter((item)=> item.id !== id)

        console.log(newArray)

        setTodos(newArray)
    }

  return (
    //have to put an id/index for the items in react
    <li >
      <input type="checkbox" />
      {todo.name}
      <button onClick={()=>deleteHandler(todo.id)} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </li>
  );
}

export default Item;
