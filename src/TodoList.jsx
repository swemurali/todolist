import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const editTask = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setNewTask(tasks[index].text);
  };

  const updateTask = () => {
    if (newTask.trim() !== "") {
      const updatedTasks = [...tasks];
      updatedTasks[currentTaskIndex].text = newTask;
      setTasks(updatedTasks);
      setIsEditing(false);
      setNewTask("");
      setCurrentTaskIndex(null);
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    
    <div className="todo-list-container justify-content-center align-items-center">
      <div>
      <h1>Todo List</h1>
      </div>
      <div className="input-container justify-content-center align-items-center">
        <input type="text"
          placeholder="Enter a task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {!isEditing && (
          <button onClick={addTask}>Add Task</button>
        )}
        {isEditing && (
          <button onClick={updateTask}>Update Task</button>
        )}
      </div>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="task-buttons">
              <button onClick={() => editTask(index)}>Edit</button>
              <button onClick={() => removeTask(index)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;