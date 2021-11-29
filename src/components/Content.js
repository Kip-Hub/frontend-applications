import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';
import D3BarChart from './D3BarChart';

const Content = () => {
  // const [seasonValue, setSeasonValue] = useState(null);
  const [Json, setJson] = useState(null);
    useEffect(() => {
      FetchData().then(data => setJson(data));
    },[])

    return (
      <main className="App-content">
      {/* <pre>
      {Json &&  JSON.stringify(Json[0], null, 1) }
      </pre> */}
      <section class="radio">
          {/* <label><input onChange={onChange} type="radio" name="chart" value="alldata" id="filter"/>all seasons </label> */}
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