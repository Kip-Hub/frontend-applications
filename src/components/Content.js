import logo from '../logo.svg';
import { SVGElement } from './SVGElement';
import { Json } from "../modules/fetchData";

const Content = () => {
    return (
        <main className="App-content">
        <SVGElement 
          width={1200}
          height={500}
          x={60}
          y={20}
        >
        </SVGElement>

        {/* <BarChart data={ Json }></BarChart> */}
      </main> 
    )
}

export default Content