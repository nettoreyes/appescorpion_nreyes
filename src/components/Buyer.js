import React, { useState, useContext } from 'react'
import { getFirestore } from "../firebase";
import { CartContext } from "../context/CartContext";
import firebase from 'firebase/app';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2'

const Buyer = (props) => {
    const { listaCarro, terminarCompra } = useContext(CartContext);

    const [camposFormulario, setCamposFormulario] = useState({
        name:"",
        phone:"",
        email:""
    });

    const [error, setError] = useState(null);

    const inputs = [
        {label: "Nombre", name:"name", type:"text"},
        {label: "Teléfono", name:"phone", type:"tel"},
        {label: "Email", name:"email", type:"email"}
    ];


    


    const guardaCompra = () => {
       
        setError(null);

        if(!camposFormulario.name.trim()){
            setError("Debe ingresar Nombre");
            return
        }
        if(!camposFormulario.phone.trim()){
            setError("Debe ingresar Tetéfono");
            return
        }
        if(!camposFormulario.email.trim()){
            setError("Debe ingresar Email");
            return
        }

        const db = getFirestore();
        const ordenCompra = db.collection("orders");       

        const listaItems = [];       
        let totalFinal = 0;

        listaCarro.forEach(element => {
            const item = {                
                idProducto: element.idProducto,
                title : element.title,
                price : element.price,
                cantidad : element.cantidad
            } 
            listaItems.push(item);            
            totalFinal += element.totalLinea;
        });


        const nuevaOrdenCompra = {
            buyer: { name: camposFormulario.name, phone: camposFormulario.phone, email:camposFormulario.email },            
            items: listaItems,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalFinal
        };

        ordenCompra.add(nuevaOrdenCompra).then((response) => {
            console.log("guardando");

            Swal.fire(
                'Compra Finalizada!',
                'Felicitaciones, su compra fue registrada!',
                'success'
                )

            terminarCompra();
            setCamposFormulario({...camposFormulario, name : "", phone : "", email : "" });        
            props.history.push('/');
        })
       
    }

    const onChange = (evt) => {
        setCamposFormulario({...camposFormulario, [evt.target.name] : evt.target.value});        
    }
    return (
        <div className="container mt-3 p-2">
            <h3 className="my-3">Datos de contacto</h3>
            
                {
                    inputs.map((input) => (
                        <div className="mb-3">
                            <label for={input.name} className="form-label">{input.label}</label>
                            <input type={input.type} className="form-control"  name={input.name} id={input.name} placeholder={`Ingrese su ${input.label}`} value={camposFormulario[input.name]} onChange={onChange} />
                        </div>     
                    ))
                }
                {
                    error ? <span className="text-danger fw-bold my-4">{ error }</span> : ''
                }
                <div className="mb-3">
                    <button className="btn btn-success btn-sm" onClick={guardaCompra}> Confirmar compra </button>
                </div>             
        </div>
    )
}

export default withRouter(Buyer)
