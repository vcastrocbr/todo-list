import { useState } from "react";

export function NewTodoForm({ onAddTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!newItem.trim()) return;
    onAddTodo(newItem);
    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          id="item"
          type="text"
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
