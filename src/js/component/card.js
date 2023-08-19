import React from "react";

export const Card = ({name, status, species, gender, origin, image}) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">status: {status}</p>
                    <p className="card-text">specie: {species}</p>
                    <p className="card-text">gender: {gender}</p>
                    <p className="card-text">origin: {origin}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                    <a href="#" className="btn btn-danger">Fav</a>
                </div>
            </div>
        </>
    )
}