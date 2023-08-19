import React, { useContext, useEffect } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    console.log("Characters", store.characters)

    useEffect(() => {
        actions.getCharacters("https://rickandmortyapi.com/api/character");
    }, []);

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row row-cols-3 row-cols-md-4 gap-4">

                {store.characters.length > 0 ? (
                    store.characters.map((item) => (
                        <Card
                            key={item.id}
                            image={item.image}
                            name={item.name}
                            status={item.status}
                            species={item.species}
                            gender={item.gender}
                            origin={item.origin.name}
                            id={item.id}
                        />
                    ))
                ) : (
                    <p>Character not found</p>
                )}
            </div>

        </div>
    );
};
