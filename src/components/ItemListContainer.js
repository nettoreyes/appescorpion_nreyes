import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = db.collection("items");

    if (id === undefined) {
      //trae todos los documentos
      itemsCollection.get().then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCargando(false);
      });
    } else {
      //   //busca por id categoria
      const idNumero = Number(id);
      const itemsCategoria = itemsCollection.where(
        "categoryId",
        "==",
        idNumero
      );
      itemsCategoria.get().then((snapshot) => {
        setProductos(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
        setCargando(false);
      });
    }

    setNombreCategoria(
      id === undefined ? "Todas las Categorias " : `Categoria ${id}`
    );
  }, [id]);

  return (
    <div className="container mt-4">
      {cargando === false ? (
        <>
          <h1>{nombreCategoria}</h1>
          {
            productos.length > 0 ? <ItemList productos={productos} /> : <h2>Sin productos en la categoria</h2>
          }
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
