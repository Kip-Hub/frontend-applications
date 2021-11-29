import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';
import D3BarChart from './D3BarChart';

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
        {Json && <D3BarChart data={ Json } />}
      </div>
        
      </main>
    )
}

export default Content