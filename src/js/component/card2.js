import React from "react";

export const Card2 = ({ name, type, dimension, created }) => {
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">type: {type}</p>
                    <p className="card-text">dimension: {dimension}</p>
                    <p className="card-text">created: {created}</p>
                    <a href="#" className="btn btn-primary">Details</a>
                    <a href="#" className="btn btn-danger">Fav</a>
                </div>
            </div>
        </>
    )
}