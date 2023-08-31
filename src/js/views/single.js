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
        <div className="card" style={{ width: "18rem" }}>
            <img src={store.details?.image} className="card-img-top" alt={store.details?.name} />
            <div className="card-body">
                <h5 className="card-title">{store.details?.name}</h5>
                <p className="card-text">Status: {store.details?.status}</p>
                <p className="card-text">Species: {store.details?.species}</p>
                <p className="card-text">Gender: {store.details?.gender}</p>
                <p className="card-text">Origin: {store.details.origin?.name}</p>
                <p className="card-text">Location: {store.details.origin?.name}</p>
            </div>
        </div>
    );
};
