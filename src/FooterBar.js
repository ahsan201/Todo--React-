export default function FooterBar({
  itemNumber,
  handleListFilter,
  handleClearTask,
}) {
  return (
    <div className="footer">
      <span>{itemNumber} items</span>
      <div className="footerFilter">
        <span onClick={handleListFilter}>All</span>
        <span onClick={handleListFilter}>Active</span>
        <span onClick={handleListFilter}>Completed</span>
      </div>
      <span onClick={handleClearTask} className="clear">
        Clear Completed
      </span>
    </div>
  );
}
