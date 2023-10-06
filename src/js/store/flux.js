const getState = ({ getStore, getActions, setStore }) => {

	return {
		store: {
			contacts: [],
			id: ""
		},
		
		actions: {
			
				createContact: async (data) => {
					const actions = getActions()
					try {
						const URL = "https://playground.4geeks.com/apis/fake/contact/"
						const opt = {
							method: "POST",
							headers: {
								"Content-type": "Application/json"
							},
							body: JSON.stringify(
								data
							)
						}
						const response = await fetch(URL, opt)
						
						console.log( "esto es la respuesta", response)
						
						if (response.ok){
							actions.getContact()
							alert("Contacto creado con exito")
						} else alert("Error al crear contacto")
					} catch (error){
						console.log("hay un error", error)
					}
				},
			
				getContact : async () => {
					
					try{
						const url = "https://playground.4geeks.com/apis/fake/contact/agenda/alegonfern_list"
						const opt = {
							method : "GET",
							headers: {
								"Content-type": "Application/json"
							},
						}
						
						const response = await fetch(url, opt)
						if (response.ok){
							const body = await response.json()
							setStore({ contacts : body})
							console.log("Aqui esta tu contacto")
						} else alert ("Error al traer los contactos");
					} catch (error) {
						console.log("Hay un error del GET", error);
						}
				},

				getContactById: async (contactId) => {
					try {
						const url = `https://playground.4geeks.com/apis/fake/contact/${contactId}`;
						const opt = {
							method: "GET",
							headers: {
								"Content-type": "Application/json"
							},
						};
				
						const response = await fetch(url, opt);
						if (response.ok) {
							const contact = await response.json();
							console.log("Aquí está tu contacto por ID:", contact);
							return contact;
						} else {
							console.error("Error al traer el contacto por ID");
							return null;
						}
					} catch (error) {
						console.error("Hay un error en la solicitud GET por ID", error);
						return null;
					}
				},
				

				deleteContact: async () => {
					const actions = getActions()
					const store = getStore()

					try {
						const url = "https://playground.4geeks.com/apis/fake/contact/"
						const opt = {
							method: "DELETE",
							headers: {
								"Content-type": "Application/json"
							}
						}
						const response = await fetch (url+store.id, opt)
						if (response.ok){
							actions.getContact()
						} else alert("Error al Eliminar el Contacto")
					} catch (error){
						console.log(error)
					}
				},

				updateContact: async (value) => {
					const store = getStore()

					try{
						const url = "https://playground.4geeks.com/apis/fake/contact/"
						const opt = {
							method: "PUT",
							headers: {
								"Content-type": "Application/json"
							},
							body: JSON.stringify(
								value
							)
						}
						const response = await fetch(url+store.id, opt)
						if (response.ok){
							alert("Contacto Actualizado Exitosamente")
						} else alert("Error al Actualizar el Contacto")
					} 
					catch(error){
						console.log(error)
					}
				},
		},
	};
};


export default getState;
