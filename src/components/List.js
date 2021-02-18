import React, { useEffect, useRef } from "react";

function List({
  todos,
  setTodos,
  statusDisplay,
  categorizedTodos,
  setCategorizedTodos,
  isEditing,
  setIsEditing,
  editItem,
  setEditItem,
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

  //when edit btn in the viewTemplete is clicked, a new editItem state will be updated
  //it will be used to show the info in the conditional rendering in the edit page - editingTemplate
  const editItemHandler = (id) => {
    let editArray = todos.filter((item) => item.id == id);

    setEditItem(editArray);
  };

  //when edit submit btn is clicked on edit page, 
  //use ref (like the new item input) to get the value, 
  //and setTodos to update the state
  //change back the isEditing statue to false to go back to the viewTemplate
  const editSubmitHandler = (id) => {
    const editName = editRef.current.value;

    if (editName === "") return;

    const editArray = todos.map((item) => {
      if (item.id == id) {
        return { ...item, name: editName };
      }
      return item;
    });

    setTodos(editArray);
    setIsEditing(false);
  };

  //viewTemplate will be shown when isEditing state is false
  //the default of isEditing = false
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

            <button
              //1: change isEditing=true to switch to the editTemplate
              //2: take the id of the item to the editItem state for display and edit in the editTemplate
              onClick={() => {
                setIsEditing(true);
                editItemHandler(todo.id);
              }}
              className="edit-btn"
            >
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
  );

  //editingTemplate will be shown when isEditing state is true
  //editItem state is updated when the user click on the Edit btn on viewTemplate,
  //which execute the editItemHandler() 
  const editingTemplate = (
    <div>

      {editItem.map((todo) => (
        <div key={todo.id}>
          <input
            className="edit-input"
            type="text"
            placeholder={todo.name}
            ref={editRef}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                editSubmitHandler(todo.id);
              }
            }}
          />
          <button onClick={() => setIsEditing(false)} type="submit">
            Cancel
          </button>
          <button onClick={() => editSubmitHandler(todo.id)} type="submit">
            Edit
          </button>
        </div>
      ))}
    </div>
  );

  //conditional rendering according to the isEditing = true/false
  return <div>{isEditing ? editingTemplate : viewTemplate}</div>;
}

export default List;
