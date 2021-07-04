import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  

  return (
    <div className="container ">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 justify-content-center ">
        {productos?.map((pro) => (
          <Item
            key={pro.id}
            item={pro}           
          />
        ))}        
      </div>
    </div>
  );
};

export default ItemList;
