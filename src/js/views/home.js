import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Contact from "../component/Contact.jsx";




export const Home = () => {

	const { actions, store } = useContext(Context)

	useEffect(() => {
		actions.getContact()
	}, [])

	return (

		<div className="">
		{
			store.contacts.map((item, index) => (
				<Contact data={item} key={index} />
			))
		}

		</div>

	);
	
};
