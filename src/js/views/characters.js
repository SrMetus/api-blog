import React, { useContext, useEffect } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

import "/src/styles/characters.css";

export const Characters = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getCharacters("https://rickandmortyapi.com/api/character");
    }, []);

    return (
        <main>
            <div className="card-container">
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
        </main>
    );
};
