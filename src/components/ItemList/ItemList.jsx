import Item from './Item';

export default function ItemList({ items, onChangeItem, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} handleChange={onChangeItem} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
