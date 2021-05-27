import React, { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const ItemListContainer = () => {
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
      },
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
    <div className="container mt-4">
      <h1>Productos</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
