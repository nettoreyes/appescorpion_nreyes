import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [productos, setProductos] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const _listaProductos = [
      {
        id: "1",
        title: "Producto 1",
        price: 5000,
        pictureUrl: "imagen1",
        idCategoria: "1",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "2",
        title: "Producto 2",
        price: 6500,
        pictureUrl: "imagen2",
        idCategoria: "1",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "3",
        title: "Producto 3",
        price: 8000,
        pictureUrl: "imagen3",
        idCategoria: "2",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "4",
        title: "Producto 4",
        price: 11000,
        pictureUrl: "imagen4",
        idCategoria: "2",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "5",
        title: "Producto 5",
        price: 13000,
        pictureUrl: "imagen5",
        idCategoria: "3",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "6",
        title: "Producto 6",
        price: 18000,
        pictureUrl: "imagen6",
        idCategoria: "3",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        id: "7",
        title: "Producto 7",
        price: 17000,
        pictureUrl: "imagen7",
        idCategoria: "4",
        descripcion:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
    ];

    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = _listaProductos.find((x) => x.id === id);
        resolve(item);
      }, 1000);
    });

    promise.then((value) => {      
      setProductos(value);
    });
  }, [id]);

  return (
    <div className="container mt-4">
      <h1>Detalles</h1>
      <ItemDetail
        title={productos?.title}
        price={productos?.price}
        descripcion={productos?.descripcion}
      />
    </div>
  );
};

export default ItemDetailContainer;
