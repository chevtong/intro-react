import './App.css';
import React, {useState} from 'react';

//importing components
import Form from './components/Form'
import List from './components/List'


function App() {

  const [todos, setTodos] = useState([]);


  return (
  
    <div className="App">

      <h1>TO DO LIST</h1>
     

      <Form 
        //need to pass the props to the components, so we can use inside it
        todos={todos}
        setTodos={setTodos}
        />
            
      <List
        todos={todos}
      />
            
    </div>
    
  );
}

export default App;
