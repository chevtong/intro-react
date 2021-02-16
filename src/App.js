import './App.css';
import React from 'react';

//importing components
import Form from './components/Form'
import List from './components/List'


function App() {
  return (
  
    <div className="App">

      <h1>TO DO LIST</h1>

      <Form/>
            
      <List/>
            
    </div>
    
  );
}

export default App;
