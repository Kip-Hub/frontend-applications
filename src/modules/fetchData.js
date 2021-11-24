import React, { useState, useEffect } from "react";

export const FetchData = () => {

    const [Json, setJson] = useState(null);

    useEffect(() => {
        const url = "https://api.tvmaze.com/shows/169/episodes";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const jsonRes = await response.json();
                console.log(jsonRes);
                setJson(jsonRes[1].name);
            } catch (error) {
                console.log("error", error);
            }
        };
        
        fetchData();
    }, []);

    return (
        <header className="App-header">
            <h1>episode name: {Json}</h1>
        </header>       
    );
};

export default FetchData;