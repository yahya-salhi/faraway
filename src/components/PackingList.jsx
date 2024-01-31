import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "charger", quantity: 11, packed: true },
];

import PropTypes from "prop-types";
PackingList.propTypes = {
  items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  onClearItem: PropTypes.func,
};
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearItem,
}) {
  const [sortBy, setSortBy] = useState("input");
  let sortsItems;
  if (sortBy === "input") sortsItems = items;
  if (sortBy === "description")
    sortsItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortsItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <div className="list">
      <ul>
        {sortsItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input"> sort by input order</option>
          <option value="description">sort by descritpion</option>
          <option value="packed"> sort by packed status</option>
        </select>

        <button onClick={onClearItem}>Clear All </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.object,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
};
function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <input
        id="form4"
        type="checkbox"
        value={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <span>
        <button onClick={() => onDeleteItem(item.id)}>🤦‍♂️</button>
      </span>
    </li>
  );
}
