import React from 'react';
import { useState } from 'react';

export default function Item({ item, handleChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          placeholder={`Edit ${item.text}`}
          value={item.text}
          onChange={(e) => {
            handleChange({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button
          aria-label={`Update item`}
          type="button"
          onClick={() => setIsEditing(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    itemContent = (
      <>
        <p style={{ textDecoration: item.done ? 'line-through' : null }}>
          {item.text}
        </p>
        <button
          aria-label={`${item.text} edit button`}
          type="button"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <>
      <input
        type="checkbox"
        checked={item.done}
        onChange={(e) => {
          handleChange({
            ...item,
            done: e.target.checked,
          });
        }}
      />
      {itemContent}
      <button
        aria-label={`${item.text} delete button`}
        type="button"
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </>
  );
}
