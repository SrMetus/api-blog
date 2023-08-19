import React, { useContext, useEffect } from "react";
import { Card } from "../component/card";
import { Context } from "../store/appContext";

export const Characters = () => {
    const { store, actions } = useContext(Context);
    console.log("Characters", store.characters)

    useEffect(() => {
		actions.getCharacters();
	}, []);

    return (
        <div>
            {store.characters.length > 0 ? (
                store.characters.map((item) => (
                    <Card
                        key={item.id}
                        image={item.image}
                        name={item.name}
                        status={item.status}
                        specie={item.species}
                        gender={item.gender}
                        origin={item.origin.name}
                        id={item.id}
                    />
                ))
            ) : (
                <p>No hay información</p>
            )}
        </div>
    );
};
