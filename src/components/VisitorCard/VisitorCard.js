import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, toggleTask } from "./visitorEventSlice";

function VisitorCard() {
  const tasks = useSelector((state) => state.visitorEvent.tasks);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask(text));
  };

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleTask(task.id)}
            />
            {task.text}
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a task"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAddTask(e.target.value);
            e.target.value = "";
          }
        }}
      />
    </div>
  );
}

export default VisitorCard;
