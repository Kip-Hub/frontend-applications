import './App.css';
import React from "react";
import Header from './components/Header';
import Content from './components/Content';

class App extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }

  componentDidMount() {
      fetch(
      "https://api.tvmaze.com/shows/169/episodes")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Please wait some time.... </h1> </div> ;
 
      return (
      <div className = "App">
          <h1> Fetched data</h1>  {
              items.map((item) => ( 
              <p>
                  { item.name },{ item.rating.average }
              </p>
              ))
          }
      </div>
  );
}
}
 
export default App;



// function App() {
//   return (
//     <div className="App">
//       <Header></Header>
//       <Content></Content>
//     </div>
//   );
// }

// export default App;
