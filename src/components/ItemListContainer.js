import React, { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [nombreCategoria, setNombreCategoria] = useState("Todas los Categorias");

  const { id } = useParams();

  // console.log(typeof(id));

  useEffect(() => {
    const _listaProductos = [
      {
        id: 1,
        title: "Producto 1",
        price: 5000,
        pictureUrl: "imagen1",
        idCategoria: "1",
      },
      {
        id: 2,
        title: "Producto 2",
        price: 6500,
        pictureUrl: "imagen2",
        idCategoria: "1",
      },
      {
        id: 3,
        title: "Producto 3",
        price: 8000,
        pictureUrl: "imagen3",
        idCategoria: "2",
      },
      {
        id: 4,
        title: "Producto 4",
        price: 11000,
        pictureUrl: "imagen4",
        idCategoria: "2",
      },
      {
        id: 5,
        title: "Producto 5",
        price: 13000,
        pictureUrl: "imagen5",
        idCategoria: "3",
      },
      {
        id: 6,
        title: "Producto 6",
        price: 18000,
        pictureUrl: "imagen6",
        idCategoria: "3"
      },
      {
        id: 7,
        title: "Producto 7",
        price: 17000,
        pictureUrl: "imagen7",
        idCategoria: "4",
      },
    ];

    const listaFiltrada = (id === undefined ? _listaProductos : _listaProductos.filter(item=>item.idCategoria === id));

    setNombreCategoria(id === undefined ? "Todas los Categorias" : `Categoria ${id}` );
    // console.table(listaFiltrada);

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(listaFiltrada);
      }, 1000);
    });

    promise.then((value) => {
      // console.log(value.map((x) => x.title));
      setProductos(value);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>{nombreCategoria}</h1>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
