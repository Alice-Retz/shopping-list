import Item from './Item';

export default function ItemList({ items, onChangeItem, OnDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Item item={item} handleChange={onChangeItem} onDelete={OnDelete} />
        </li>
      ))}
    </ul>
  );
}
