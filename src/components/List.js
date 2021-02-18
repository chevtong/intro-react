import React, { useEffect, useRef } from "react";

function List({
  todos,setTodos,
  statusDisplay,
  categorizedTodos, setCategorizedTodos,
  isEditing, setIsEditing,
  editItem, setEditItem
}) {

  const editRef = useRef();

  
  //get the id from the selected item then pass it to the function
  //create a new array from ...todos (a safer way to change the values of state)
  // filter it by getting the id is not matching
  //then use setTodos to push to the state
  const deleteHandler = (id) => {
    let originalArray = [...todos];

    let newArray = originalArray.filter((item) => item.id !== id);

    setTodos(newArray);
  };

  //get the id from the selected item then pass to the function
  //grab the todos from props, then use map to loop thru
  //find the one with the same id and change it to the opposite
  const completeHandler = (id) => {
    let newArray = [...todos];

    newArray.map((item) => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
    });

    //without setTodos, the UI of checkbox will not be changed
    //since we set the input checked value to {todo.complete}
    setTodos(newArray);
  };

  //categorized all the items in todos according to the statuDisplay
  const filterHandler = () => {
    //console.log(statusDisplay)
    switch (statusDisplay) {
      case "complete":
        setCategorizedTodos(todos.filter((item) => item.complete == true));
        break;

      case "incomplete":
        setCategorizedTodos(todos.filter((item) => item.complete == false));
        break;

      default:
        setCategorizedTodos(todos);
        break;
    }
  };

  //execute the filterHander
  //whenever there is an update on todos and statusDisplay on state
  useEffect(() => {
    filterHandler();
  }, [todos, statusDisplay]);


  
 
  const editBtnHandler = (id) => {
   
    let editArray = todos.filter((item) => item.id == id);
    
    setEditItem(editArray);
  }

  const editSubmitHandler = (id) =>{
    
    console.log(id)
    const editName = editRef.current.value;
    console.log(editName)
    if (editName === "") return;

    const editArray = todos.map(item =>{
      if(item.id == id){
        return {...item, name: editName}
      }
      return item;
    })
    //console.log(editArray)

    setTodos(editArray)
    setIsEditing(false)

  }

  const viewTemplate = (
    <div className="list">
      <ul>
        {categorizedTodos.map((todo) => (
          <li key={todo.id}>
            <input
              checked={todo.complete}
              onChange={() => completeHandler(todo.id)}
              type="checkbox"
            />

            {todo.name}

            <button onClick={() => {setIsEditing(true); editBtnHandler(todo.id) }} className="edit-btn">
              <i className="far fa-edit"></i>
            </button>

            <button
              onClick={() => deleteHandler(todo.id)}
              className="trash-btn"
            >
              <i className="fas fa-trash"></i>
            </button>
          </li>
        ))}
      </ul>

      <p>{todos.filter((todo) => !todo.complete).length} incomplete item(s) </p>
    </div>
  )
  const editingTemplate = (
    <div>
      {editItem.map((todo) => (
         <div key={todo.id}>
                 <input 
                    className="edit-input" 
                    type="text" 
                    placeholder={todo.name} 
                    ref={editRef} 
                  />
                 <button onClick={() => setIsEditing(false)} type="submit">Cancel</button>
                 <button onClick={() => editSubmitHandler(todo.id)}type="submit">Edit</button>
            </div>
           
           ))}  
       
    </div>
  )

  return <div className="todo">{isEditing ? editingTemplate : viewTemplate}</div>;
  
}

export default List;