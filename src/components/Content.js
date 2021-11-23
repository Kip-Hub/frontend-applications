import logo from '../logo.svg';
import { SVGElement } from './SVGElement';

const Content = () => {
    return (
        <main className="App-content">
        <img src={logo} className="App-logo" alt="logo" />
        <SVGElement 
          width={1200}
          height={500}
          x={60}
          y={20}
        >
        </SVGElement>
      </main> 
    )
}

export default Content