export function TodoList({ children }) {
  return (
    <ul className="list">
      {children.length === 0 ? "No items added" : children}
    </ul>
  );
}

