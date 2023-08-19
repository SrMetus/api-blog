import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { id } = useParams(); // ID de la URL
    const { store, actions } = useContext(Context);

	useEffect(() => {
        actions.getCharactersDetails(`https://rickandmortyapi.com/api/character/${id}`);
    }, []);

	console.log(store.details)

    return (
        <div>
			<img src={store.details?.image} className="card-img-top" alt="" />
            <h2>Name: {store.details?.name}</h2>
            <p>Status: {store.details?.status}</p>
            <p>Species: {store.details?.species}</p>
            <p>Gender: {store.details?.gender}</p>
            <p>Origin: {store.details.origin?.name}</p>
			<p>Location: {store.details.location?.name}</p>
        </div>
    );
};
