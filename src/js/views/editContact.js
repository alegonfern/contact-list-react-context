import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/demo.css";

export const EditContact = () => {
  const { store, actions } = useContext(Context);
  const { id } = useParams(); // Obtener el ID del contacto de los parámetros de la URL
  const [data, setData] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    agenda_slug: "alegonfern_list"
  });

  // Utilizar useEffect para cargar los datos del contacto al montar el componente
  useEffect(() => {
    const loadContactData = async () => {
      try {
        const contact = await actions.getContactById(store.id);

        // Establecer los datos del contacto en el estado local
        setData({
          full_name: contact.full_name || "",
          email: contact.email || "",
          phone: contact.phone || "",
          address: contact.address || "",
          agenda_slug: contact.agenda_slug || "alegonfern_list"
        });
      } catch (error) {
        console.error("Error al cargar los datos del contacto", error);
      }
    };

    // Llamar a la función para cargar los datos del contacto
    loadContactData();
  }, [id, actions]);

  const info = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  };

  const clickContact = async (event) => {
    event.preventDefault();
    actions.updateContact(data);
  };

  return (
    <div className="container">
      {/* INICIO DEL FORMULARIO DEL CONTACT LIST */}
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Nombre completo
        </label>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Nombre Completo"
          aria-label="Username"
          aria-describedby="addon-wrapping"
          onChange={info}
          name="full_name"
          required
          value={data.full_name}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ingresar email"
          onChange={info}
          name="email"
          required
          value={data.email}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ingresar teléfono"
          onChange={info}
          name="phone"
          required
          value={data.phone}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Ingresar Dirección"
          onChange={info}
          name="address"
          required
          value={data.address}
        />
      </div>

      <button className="btn btn-primary col-12" onClick={clickContact}>
        Guardar
      </button>

      <Link to="/">
        <span> volver a lista de contactos. </span>
      </Link>
    </div>
  );
};