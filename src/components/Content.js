import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';
import { dataByYear } from "../localData";
import { BarChart } from "../components/BarChart";

const Content = () => {
  const [Json, setJson] = useState(null);
    useEffect(() => {
      FetchData().then(data => setJson(data));
    },[])

    return (
      <main className="App-content">
      <img src={logo} className="App-logo" alt="logo" />
      
      <pre>
      { JSON.stringify(Json, null, 1) }
        </pre>

        <div>
          <BarChart data={dataByYear} />
        </div>
        
      </main>
    )
}

export default Content