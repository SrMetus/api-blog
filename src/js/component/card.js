import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ id, name, status, species, gender, origin, image }) => {
    const { actions } = useContext(Context)

    const handleAddFavorite = () => {
        actions.addFavorite({
            id,
            name,
            status,
            species,
            gender,
            origin,
            image
        })
    }
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">status: {status}</p>
                    <p className="card-text">species: {species}</p>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">origin: {origin}</p>
                    <Link to={`/single/${id}`} className="btn btn-primary">Details</Link>
                    <button className="btn btn-danger" onClick={handleAddFavorite}>Fav</button>
                </div>
            </div>
        </>
    )
}