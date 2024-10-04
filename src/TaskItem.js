export default function TaskItem({ task, index, handleCheckboxChange }) {
  return (
    <div key={index} className="task">
      <input
        type="checkbox"
        checked={task.status}
        onChange={(event) => handleCheckboxChange(event, index)}
      />
      <span style={{ textDecoration: task.status ? "line-through" : "none" }}>
        {task.task}
      </span>
    </div>
  );
}
