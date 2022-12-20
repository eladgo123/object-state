import './App.css';
import { useState } from 'react';
import Records from './Records.json';
function App() {
  const[toDo , setToDo] = useState(" ")
  const[toDoList,settoDoList] = useState(['ByMilk', 'Go to a mivie', 'Walk the dog'])
  
  function handleTodoChange(e){
     setToDo(e.target.value)
  }
  function AddItem(){
    settoDoList(toDoList.push(toDo))
  }


  return (
    <div className="App">
        <input value={toDo} onChange={handleTodoChange}/>
        <button onClick={AddItem}>Add to liste</button>
        <h3>Lst of things to do </h3>
        <ul>
          {
            Records.map(
              Record =>{
                return(
                  <div className ='box'>
                  {Record.name}
                  </div>
                )
              }
            )
          }
          {
            toDoList.map(
              toDo => (
                <li>{toDo}</li>
              ) )
          }
        </ul>
    </div>
  );
}

export default App;
