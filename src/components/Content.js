import logo from '../logo.svg';
import { SVGElement } from './SVGElement';
import { Json } from "../modules/fetchData";
import React, { useState, useEffect } from "react";
import FetchData from '../modules/fetchData';

const Content = () => {
  const [Json, setJson] = useState(null);
    useEffect(() => {
      FetchData().then(data => setJson(data))
    })

    return (
      <main className="App-content">
      <img src={logo} className="App-logo" alt="logo" />
      {/* { Json[1]?.name } */}
      </main>
    )
}

export default Content