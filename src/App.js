import './App.css';
import React from "react";
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
// import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
