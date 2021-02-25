import React, { useRef } from "react";

function Edit({ todos,setTodos,setIsEditing, editItem }) {

  const editRef = useRef();

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

  return (
    <div className="edit-template">
    {editItem.map((todo) => (
      <div key={todo.id}>
        <h2 className="edit-title">EDIT AN ITEM</h2>
        <button onClick={() => setIsEditing(false)} type="submit" className="goback-btn">
        <i class="fas fa-arrow-left"></i>
        </button>
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
        
        <button onClick={() => editSubmitHandler(todo.id)} type="submit" className="editsubmit-btn">
        <i class="far fa-check-circle"></i>
        </button>
      </div>
    ))}
  </div>
  );
}

export default Edit;
