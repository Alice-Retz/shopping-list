import React from 'react';
import { useReducer } from 'react';
import AddItem from '../../components/ItemList/AddItem';
import ItemList from '../../components/ItemList/ItemList';

const nextId = 3;

const initialItems = [
  { id: 0, text: 'Juice 🧃', done: false },
  { id: 1, text: 'Croissant 🥐', done: false },
  { id: 2, text: 'Bacon 🥓', done: false },
];

function itemsReducer(items, action) {
  switch (action.type) {
    case 'added': {
      return [
        ...items,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    }

    case 'changed': {
      return items.map((item) => {
        if (item.id === action.task.id) {
          return action.task;
        }
        return item;
      });
    }
    case 'deleted': {
      return items.filter((item) => item.id !== action.id);
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
}

export default function Shopping() {
  const [items, dispatch] = useReducer(itemsReducer, initialItems);

  const handleAddItem = (text) => {
    dispatch({
      type: 'added',
      id: nextId + 1,
      text,
    });
  };
  const handleChangeItem = (task) => {
    dispatch({
      type: 'changed',
      task,
    });
  };

  const handleDeletedItem = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    });
  };

  return (
    <>
      <h1>Shopping List</h1>
      <AddItem onAddItem={handleAddItem} />
      <ItemList
        items={items}
        onChangeItem={handleChangeItem}
        onDelete={handleDeletedItem}
      />
    </>
  );
}
