import React, { useState, useEffect } from "react";

export const FetchData = () => {

    const [name, setName] = useState(null);

    useEffect(() => {
        const url = "https://api.tvmaze.com/shows/169/episodes";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const json = await response.json();
                console.log(json);
                setName(json[1].name);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    return (
        <header className="App-header">
            <h1>{name}</h1>
        </header>       
    );
};

export default FetchData;