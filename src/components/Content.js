import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';
import D3BarChart from './D3BarChart';

const Content = () => {

  const [Json, setJson] = useState(null); // fetching the data and setting state 
    useEffect(() => {
      FetchData().then(data => setJson(data));
    },[])

    while (!Json) {
      return <p>fetching data...</p> // If there is no data
    }

    return (
      <main className="App-content">
      <section className="radio">
          <label><input type="radio" name="chart" value="alldata" id="filter"/>all seasons </label>
          <label><input type="radio" name="chart" value="season_1" id="filter"/>season 1 </label>
          <label><input type="radio" name="chart" value="season_2" id="filter" />season 2 </label>
          <label><input type="radio" name="chart" value="season_3" id="filter" />season 3 </label>
          <label><input type="radio" name="chart" value="season_4" id="filter" />season 4 </label>
          <label><input type="radio" name="chart" value="season_5" id="filter" />season 5 </label>
      </section>  
        {Json && <D3BarChart data={ Json } />}  
      </main>
    )
}

export default Content