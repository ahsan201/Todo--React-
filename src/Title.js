export default function Title({ children, icon }) {
  return (
    <div className="title container">
      <h1>{children}</h1>
      <div>
        <img src={icon} alt="dark/light mode icon"></img>
      </div>
    </div>
  );
}
