import React from 'react'

function Edit() {
    return (
        <div>
            {/* //editingTemplate will be shown when isEditing state is true
  //editItem state is updated when the user click on the Edit btn on viewTemplate,
  //which execute the editItemHandler() */}
  const editingTemplate = (
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
        </div>
    )
}

export default Edit
