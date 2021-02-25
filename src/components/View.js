import React, { useEffect } from "react";

function View({
    todos,
    setTodos,
    statusDisplay,
    setStatusDisplay,
    categorizedTodos,
    setCategorizedTodos,
    setIsEditing,
        setEditItem,
  }) {

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
    })
    //without setTodos, the UI of checkbox will not be changed
    //since we set the input checked value to {todo.complete}
    setTodos(newArray);
  };

  //get the display of statusDisplay - (all/complete/incomplete) from the dropdown menu
  //update it in the state and show the corresponding categorized todo items
  //refer to filterHandler in the List
  const selectHandler = (e) => {
    setStatusDisplay(e.target.value);
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


    
    return (
        
        <div>
            <div className="categories-btns">
                <button
                onClick={selectHandler}
                className={statusDisplay == "complete" ? "active-btn" : "idle-btn"}
                value="complete"
                >
                complete
                </button>
                <button
                onClick={selectHandler}
                className={statusDisplay == "all" ? "active-btn" : "idle-btn"}
                value="all"
                >
                All
                </button>
                <button
                onClick={selectHandler}
                className={statusDisplay == "incomplete" ? "active-btn" : "idle-btn"}
                value="incomplete"
                >
                ongoing
                </button>
            </div>
            <ul>
                {categorizedTodos.map((todo) => (
                <li key={todo.id} className="trans">
                    <input
                    className="checkbox1"
                    checked={todo.complete}
                    onChange={() => completeHandler(todo.id)}
                    type="checkbox"
                    />

                    <p className={todo.complete ? "incomplete-todo" : "completed-todo"}>
                    {todo.name}
                    </p>

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

            <p className="todo-countdown">
                {todos.filter((todo) => !todo.complete).length} incomplete item(s){" "}
            </p>
        </div>
  );


}

export default View
