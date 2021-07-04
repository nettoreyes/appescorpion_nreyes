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
  }, [id]);

  return (
    <div className="container mt-4">      
      <ItemDetail item={producto} />
    </div>
  );
};

export default ItemDetailContainer;
