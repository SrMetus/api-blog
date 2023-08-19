import React, { useContext, useEffect } from "react";
import { Card2 } from "../component/card2";
import { Context } from "../store/appContext";

export const Locations = () => {
    const { store, actions } = useContext(Context);
    console.log("Locations", store.locations)

    useEffect(() => {
        actions.getLocations("https://rickandmortyapi.com/api/location");
    }, []);

    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center">
            <div className="row row-cols-3 row-cols-md-4 gap-4">

                {store.locations.length > 0 ? (
                    store.locations.map((item) => (
                        <Card2
                            key={item.id}
                            name={item.name}
                            type={item.type}
                            dimension={item.dimension}
                            created={item.created}
                            id={item.id}
                        />
                    ))
                ) : (
                    <p>Location Not Found</p>
                )}
            </div>
        </div>
    );
};

