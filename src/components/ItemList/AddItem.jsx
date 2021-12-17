import React from 'react';
import { useState } from 'react';

export default function AddItem({ onAddItem }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
    onAddItem(text);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="New Item"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button aria-label="Add New Item" type="submit">
        Add Item
      </button>
    </form>
  );
}
