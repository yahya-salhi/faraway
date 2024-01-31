import { useState } from "react";
import PropTypes from "prop-types";
Form.propTypes = {
  onAddItem: PropTypes.func,
};
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setSQuantity] = useState(1);
  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItem(newItem);
    setDescription("");
    setSQuantity(1);
  }
  return (
    <form id="form" className="add-form" onSubmit={handelSubmit}>
      <h3>What do you need for your trip 🍖</h3>
      <select
        id="form3"
        value={quantity}
        onChange={(e) => setSQuantity(+e.target.value)}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        id="form2"
      />
      <button>Add</button>
    </form>
  );
}
export default Form;
