import Background from "./Background";
import Title from "./Title";
import SunIcon from "./asset/sun-32.png";
import TaskInput from "./TaskInput";
import DisplayTask from "./DisplayTask";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [allTask, setAllTask] = useState([]);

  // Handle input change
  function handleTaskInput(e) {
    setTaskInput(e.target.value);
  }

  // Handle task submission
  function submitTask(e) {
    e.preventDefault();
    if (taskInput !== "") {
      setAllTask([...allTask, { status: false, task: taskInput }]); // Add new task to task list
      setTaskInput(""); // Reset input field
    }
  }

  // Handle task checked/unchecked
  function handleChecked(index, isChecked) {
    const updatedTasks = allTask.map((task, i) =>
      i === index ? { ...task, status: isChecked } : task
    );
    setAllTask(updatedTasks); // Update task list to trigger re-render
  }

  return (
    <>
      <Title icon={SunIcon}>Todo</Title>
      <TaskInput
        textInputValue={taskInput}
        handleOnchangeInput={handleTaskInput}
        onSubmit={submitTask}
      />
      <DisplayTask taskList={allTask} checked={handleChecked} />
      <Background />
    </>
  );
}

export default App;
