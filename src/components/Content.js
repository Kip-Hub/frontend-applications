import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';
import { createChart, createAxis, createBars } from './D3BarChart';
import { localApi } from '../localApiData';
import D3BarChart from './D3BarChart';
// import { dataByYear } from "../localData";
// import { BarChart } from "../components/BarChart";

const Content = () => {
  const [Json, setJson] = useState(null);
    useEffect(() => {
      FetchData().then(data => setJson(data));
    },[])

    return (
      <main className="App-content">
      
      {/* <pre>
      {Json &&  JSON.stringify(Json[0], null, 1) }
      </pre> */}

      <div>
        <D3BarChart data={ localApi } />
      </div>
        
      </main>
    )
}

export default Content