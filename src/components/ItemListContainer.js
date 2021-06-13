import React, { useEffect, useState } from "react";
//import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../firebase";

const ItemListContainer = () => {
  const [productos, setProductos] = useState(null);
  const [nombreCategoria, setNombreCategoria] = useState(
    "Todas los Categorias"
  );
  const [cargando, setCargando] = useState(true);

  const { id } = useParams(0);

  // console.log(typeof(id));

  useEffect(() => {
    //

    
    const db = getFirestore();
    const itemsCollection = db.collection("items");


   if (id === undefined) {
      //trae todos los documentos
      itemsCollection.get().then((snapshot) => {
        setProductos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
        setCargando(false);
      });
    } else {
    //   //busca por id categoria
      const idNumero = Number(id);     
      const itemsCategoria = itemsCollection.where("categoryId", "==", idNumero);
      itemsCategoria.get().then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCargando(false);
      });
    }

    //busca por el id del producto
    // const doc = itemsCollection.doc("oADzHWo7bUam2yyvR96g");
    // doc.get().then(item => {
    //   console.log(item.data())
    // })

    
    setNombreCategoria(
      id === undefined ? "Todas las Categorias " : `Categoria ${id}`
    );

    // const _listaProductos = [
    //   {
    //     id: 1,
    //     title: "Producto 1",
    //     price: 5000,
    //     pictureUrl: "1025",
    //     idCategoria: "1",
    //   },
    //   {
    //     id: 2,
    //     title: "Producto 2",
    //     price: 6500,
    //     pictureUrl: "1026",
    //     idCategoria: "1",
    //   },
    //   {
    //     id: 3,
    //     title: "Producto 3",
    //     price: 8000,
    //     pictureUrl: "1027",
    //     idCategoria: "2",
    //   },
    //   {
    //     id: 4,
    //     title: "Producto 4",
    //     price: 11000,
    //     pictureUrl: "1028",
    //     idCategoria: "2",
    //   },
    //   {
    //     id: 5,
    //     title: "Producto 5",
    //     price: 13000,
    //     pictureUrl: "1029",
    //     idCategoria: "3",
    //   },
    //   {
    //     id: 6,
    //     title: "Producto 6",
    //     price: 18000,
    //     pictureUrl: "1031",
    //     idCategoria: "3"
    //   },
    //   {
    //     id: 7,
    //     title: "Producto 7",
    //     price: 17000,
    //     pictureUrl: "1032",
    //     idCategoria: "4",
    //   },
    //   {
    //     id: 8,
    //     title: "Producto 8",
    //     price: 16000,
    //     pictureUrl: "1033",
    //     idCategoria: "2",
    //   }
    // ];

    // const listaFiltrada = (id === undefined ? _listaProductos : _listaProductos.filter(item=>item.idCategoria === id));

    // setNombreCategoria(id === undefined ? "Todas los Categorias" : `Categoria ${id}` );
    // // console.table(listaFiltrada);

    // const promise = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(listaFiltrada);
    //   }, 1000);
    // });

    // promise.then((value) => {
    //   // console.log(value.map((x) => x.title));
    //   setProductos(value);
    //   setCargando(false);
    // });
  }, [id]);

  return (
    <div className="container mt-4">
      {cargando === false ? (
        <>
          <h1>{nombreCategoria}</h1>
          <ItemList productos={productos} />
        </>
      ) : (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
