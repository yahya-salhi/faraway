import PropTypes from "prop-types";

Stats.propTypes = {
  items: PropTypes.array,
};

function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🛒</em>
      </p>
    );
  const numItem = items.length;
  const itemPacked = items.filter((item) => item.packed).length;
  const percentageItem = Math.round((itemPacked / numItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentageItem === 100
          ? "you have got evreything ! ready to go 🪁"
          : `🚀 you have ${numItem} items on your list,and you already packed
       ${itemPacked} (${percentageItem}%)`}
      </em>
    </footer>
  );
}
export default Stats;
