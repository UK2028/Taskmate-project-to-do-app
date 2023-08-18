import { useState,useEffect } from 'react';
import { Header } from './components/Header';
import { AddTask } from './components/AddTask';
import { ShowTask } from './components/ShowTask';

import './App.css';

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [taskName, setTaskName] = useState("");
  const [id, setId] = useState(0);

  const handleAddTasks = (event) => {
    event.preventDefault();
    const date = new Date();
    if (taskName !== "") {
      if (id) {
        const updatedTasks = tasks.map(ele => ele.id === id ? { id: id, name: taskName, time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` } : ele);
        setTasks(updatedTasks);
      }
      else {
        const item = {
          id: Date.now(),
          name: taskName,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }
        setTasks([...tasks, item]);
      }
      setTaskName("");
      setId(0);
    }
  }

  const handleEdit = (taskId) => {
    const item = tasks.find(ele => ele.id === taskId);
    setTaskName(item.name);
    setId(item.id);
  }

  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  

  return (
    <div className="App">
      <Header />
      <div className='middleBody'>
        <AddTask taskName={taskName} setTaskName={setTaskName} id={id} handleAddTasks={handleAddTasks} />
        <ShowTask tasks={tasks} setTasks={setTasks} handleEdit={handleEdit} />
      </div>
    </div>
  );
}

export default App;
