import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "take the trash out",
      day: "December 5th at 18:00",
      reminder: true,
    },
    {
      id: 2,
      text: "go to school",
      day: "December 5th at 8:00",
      reminder: true,
    },
    {
      id: 3,
      text: "go to gym",
      day: "December 5th at 11:00",
      reminder: false,
    },
  ]);
  const[showAddTask,setShowAddTask]=useState(false);
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const onAdd = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { ...task, id };
    setTasks([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={onAdd} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task To Show"
      )}
    </div>
  );
}

export default App;
