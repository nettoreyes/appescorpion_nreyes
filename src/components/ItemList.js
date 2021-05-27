import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
  

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4">
        {productos?.map((pro) => (
          <Item
            key={pro.id}
            id={pro.id}
            title={pro.title}
            price={pro.price}
            pictureUrl={pro.pictureUrl}
            initial={1}
            stock={10}
          />
        ))}
        {/* {productos?.map((pro) => (
        <p key={pro.id}>{pro.title}</p>
      ))} */}
      </div>
    </div>
  );
};

export default ItemList;
