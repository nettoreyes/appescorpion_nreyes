import React, { useEffect, useState } from "react";
import Item from "./Item";

const ItemList = () => {
  const [productos, setProductos] = useState(null);

  useEffect(() => {
    const _listaProductos = [
      {
        id: 1,
        title: "Producto 1",
        price: 5000,
        pictureUrl: "imagen1",
      },
      {
        id: 2,
        title: "Producto 2",
        price: 6500,
        pictureUrl: "imagen2",
      },
      {
        id: 3,
        title: "Producto 3",
        price: 8000,
        pictureUrl: "imagen3",
      },
      {
        id: 4,
        title: "Producto 4",
        price: 11000,
        pictureUrl: "imagen4",
      },
      {
        id: 5,
        title: "Producto 5",
        price: 13000,
        pictureUrl: "imagen5",
      },
      {
        id: 6,
        title: "Producto 6",
        price: 18000,
        pictureUrl: "imagen6",
      },
      {
        id: 7,
        title: "Producto 7",
        price: 17000,
        pictureUrl: "imagen7",
      }
    ];

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(_listaProductos);
      }, 3000);
    });

    promise.then((value) => {
      console.log(value.map((x) => x.title));
      setProductos(value);
    });
  }, []);

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
