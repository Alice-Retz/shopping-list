import Item from './Item';

export default function ItemList({ items, itemOnChange, itemOnDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} onChange={itemOnChange} onDelete={itemOnDelete} />
        </li>
      ))}
    </ul>
  );
}
