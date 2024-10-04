import TaskItem from "./TaskItem"; // Import TaskItem

export default function DisplayTask({ taskList, checked }) {
  const handleCheckboxChange = (event, index) => {
    checked(index, event.target.checked); // Pass the index and checked state
  };

  return (
    <div className="container taskContainer">
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))
      ) : (
        <div className="emptyList">
          You don't have any tasks in your todo list.
        </div>
      )}
    </div>
  );
}
