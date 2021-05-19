import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = () => {
  return (
    <div className="Container m-4">
      <h1>Contenido</h1>
      <ItemCount stock={5} initial={1} />
    </div>
  );
};

export default ItemListContainer;
