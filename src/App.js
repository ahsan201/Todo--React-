import Background from "./Background";
import Title from "./Title";
import SunIcon from "./asset/sun-32.png";
import TaskInput from "./TaskInput";
import DisplayTask from "./DisplayTask";
import FooterBar from "./FooterBar";
import "./App.css";
import { useState } from "react";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [allTask, setAllTask] = useState([]);
  const [listFilter, setListFilter] = useState("all");

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

  function handleListFilter(e) {
    // Set the filter based on the clicked element's text content
    setListFilter(e.target.textContent.toLowerCase());

    // Get the parent element and all its children (spans)
    const siblings = e.target.parentElement.children;

    // Loop through all sibling elements (spans)
    Array.from(siblings).forEach((element) => {
      element.classList.remove("active"); // Remove the 'active' class from all spans
    });

    // Add the 'active' class to the clicked element
    e.target.classList.add("active");
  }
  function handleClearTask() {
    setAllTask(allTask.filter((task) => task.status === false));
  }

  return (
    <>
      <Title icon={SunIcon}>Todo</Title>
      <TaskInput
        textInputValue={taskInput}
        handleOnchangeInput={handleTaskInput}
        onSubmit={submitTask}
      />
      <DisplayTask
        taskList={allTask}
        checked={handleChecked}
        itemNumber={allTask.length}
        listFilter={listFilter}
        handleListFilter={handleListFilter}
        handleClearTask={handleClearTask}
      />
      <Background />
    </>
  );
}

export default App;
