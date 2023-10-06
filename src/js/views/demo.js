import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [ data, setData ] = useState({
		full_name: "",
		email: "",
		phone: "",
		address: "",
		agenda_slug: "alegonfern_list",
	})
	const info = (event) => {
		setData({
			...data, [event.target.name]: event.target.value
		})
	}
	const clickContact = async (event) => {
		event.preventDefault()
		actions.createContact(data)
	}


	return (
		<div className="container">
			
			{/* INICIO DEL FORMULARIO DEL CONTACT LIST */}
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Nombre Completo</label>
				<input type="text" className="form-control my-3" placeholder="Nombre Completo " aria-label="Username" aria-describedby="addon-wrapping" onChange={info} name="full_name" required value={data.full_name}></input> 
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresar Email" onChange={info} name="email" required  value={data.email}></input> 
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Teléfono</label>
				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresar Telefono" onChange={info} name="phone" required value={data.phone}></input>
			</div>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">Dirección</label>
				<input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ingresar Dirección" onChange={info} name="address" required value={data.address}></input>
			</div>

			<button className="btn btn-primary col-12" onClick={clickContact}>Guardar</button>

			<Link to="/">
				<span> volver a lista de contactos. </span>
			</Link>
			

		</div>
	);
};
