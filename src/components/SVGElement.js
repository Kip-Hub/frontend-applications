export const SVGElement = ({children, width, height, x, y}) => {
    return(
    <svg width={width} height={height}>
      <g transform={`translate(${x},${y})`}>
      {children}
      </g>
    </svg>
  )}