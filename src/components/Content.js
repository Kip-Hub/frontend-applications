import logo from '../logo.svg';

const Content = () => {
    return (
        <main className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>content component</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </main> 
    )
}

export default Content