import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from 'react-router-dom'
import { getFirestore } from "../firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  useEffect(() => {

    const db = getFirestore();
    const itemsCollection = db.collection("items");    
    //busca por el id del producto
    const doc = itemsCollection.doc(id);
    doc.get().then(item => {
      setProducto({id:item.id, ...item.data()})
    })
     




    // const _listaProductos = [
    //   {
    //     id: "1",
    //     title: "Producto 1",
    //     price: 5000,
    //     pictureUrl: "1025",
    //     idCategoria: "1",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "2",
    //     title: "Producto 2",
    //     price: 6500,
    //     pictureUrl: "1026",
    //     idCategoria: "1",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "3",
    //     title: "Producto 3",
    //     price: 8000,
    //     pictureUrl: "1027",
    //     idCategoria: "2",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "4",
    //     title: "Producto 4",
    //     price: 11000,
    //     pictureUrl: "1028",
    //     idCategoria: "2",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "5",
    //     title: "Producto 5",
    //     price: 13000,
    //     pictureUrl: "1029",
    //     idCategoria: "3",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "6",
    //     title: "Producto 6",
    //     price: 18000,
    //     pictureUrl: "1031",
    //     idCategoria: "3",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "7",
    //     title: "Producto 7",
    //     price: 17000,
    //     pictureUrl: "1032",
    //     idCategoria: "4",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   },
    //   {
    //     id: "8",
    //     title: "Producto 7",
    //     price: 16000,
    //     pictureUrl: "1033",
    //     idCategoria: "2",
    //     descripcion:
    //       "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //   }
    // ];

    
    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     const item = _listaProductos.find((x) => x.id === id);
    //     resolve(item);
    //   }, 1000);
    // });

    // promise.then((value) => {      
    //   setProductos(value);
    // });

  }, [id]);

  return (
    <div className="container mt-4">      
      <ItemDetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;
