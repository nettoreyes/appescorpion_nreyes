import React from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  return (
    <div className="Container m-4">
      <h1>Productos</h1>
      {/* <ItemCount stock={5} initial={1} /> */}
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
