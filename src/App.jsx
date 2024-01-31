import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [items, setItems] = useState([]);
  function addItems(item) {
    setItems((it) => [...it, item]);
  }
  function deleteItem(id) {
    setItems((it) => it.filter((item) => item.id !== id));
  }
  function toggleItem(id) {
    setItems((it) =>
      it.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItem() {
    if (items.length === 0) {
      window.alert("mafama chay ");
    } else {
      const shouldDelete = window.confirm("are you wante to delete all");
      if (shouldDelete) {
        setItems([]);
        toast.success("deletes successfully", {
          position: "bottom-right",
          autoClose: 3000,
        });
      } else {
        toast.info("deletion canceled", {
          position: "bottom-right",
          autoClose: 3000,
        });
      }
    }
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItems} />
      <PackingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        onClearItem={clearItem}
      />

      <ToastContainer />

      <Stats items={items} />
    </div>
  );
}

export default App;
