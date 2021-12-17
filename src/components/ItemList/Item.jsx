import { useState } from 'react';

export default function Item({ item, handleChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let itemContent;
  if (isEditing) {
    itemContent = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            handleChange({
              ...item,
              text: e.target.value,
            });
          }}
        />

        <button type="button" onClick={() => setIsEditing(false)}>
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
        <button type="button" onClick={() => setIsEditing(true)}>
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
      <button type="button" onClick={() => onDelete(item.id)}>
        Delete
      </button>
    </>
  );
}
