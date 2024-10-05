import TaskItem from "./TaskItem";
import FooterBar from "./FooterBar";

export default function DisplayTask({
  taskList,
  checked,
  itemNumber,
  listFilter,
  handleListFilter,
  handleClearTask,
}) {
  const handleCheckboxChange = (event, index) => {
    checked(index, event.target.checked);
  };

  // Filter tasks based on the listFilter value
  const filteredTaskList = taskList.filter((task) => {
    switch (listFilter) {
      case "active":
        return !task.status; // Return only active tasks
      case "completed":
        return task.status; // Return only completed tasks
      case "all":
      default:
        return true; // Return all tasks
    }
  });

  return (
    <div className="container taskContainer">
      {filteredTaskList.length > 0 ? (
        filteredTaskList.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))
      ) : (
        <div className="emptyList">
          {listFilter === "completed"
            ? "No tasks have been marked as completed."
            : "You don't have any tasks in your todo list."}
        </div>
      )}

      <FooterBar
        itemNumber={itemNumber}
        handleListFilter={handleListFilter}
        handleClearTask={handleClearTask}
      />
    </div>
  );
}
