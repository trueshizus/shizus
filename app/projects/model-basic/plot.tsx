import { scaleLinear } from '@visx/scale';
import { Line } from '@visx/shape';
import { Grid } from '@visx/grid';

const VisxPlot = () => {
  const width = 600, height = 600;  // Made plot larger
  const margin = 50;  // Increased margin
  const xMax = width - 2 * margin;
  const yMax = height - 2 * margin;
  
  // Scale from -10 to 10 for a more typical Cartesian look
  const xScale = scaleLinear({ domain: [-10, 10], range: [0, xMax] });
  const yScale = scaleLinear({ domain: [-10, 10], range: [yMax, 0] });
  
  return (
    <div className="bg-zinc-200 rounded-lg flex justify-center items-center w-full max-w-[600px] aspect-square mx-auto">
      <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="xMidYMid meet">
        <defs>
          <marker
          id="arrow"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="8"  // Larger arrows
          markerHeight="8"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" fill="#333" />
        </marker>
      </defs>
      
      <g transform={`translate(${margin}, ${margin})`}>
        {/* Grid */}
        <Grid
          xScale={xScale}
          yScale={yScale}
          width={xMax}
          height={yMax}
          numTicksRows={10}  // Fewer grid lines
          numTicksColumns={10}
          stroke="#333"  // Lighter grid
          strokeWidth={1}
        />
        
        {/* Axes */}
        <Line 
          from={{ x: xScale(-10), y: yScale(0) }} 
          to={{ x: xScale(10), y: yScale(0) }} 
          stroke="#333"
          strokeWidth={2}  // Thicker axes
          markerEnd="url(#arrow)"
        />
        <Line 
          from={{ x: xScale(0), y: yScale(-10) }} 
          to={{ x: xScale(0), y: yScale(10) }} 
          stroke="#333"
          strokeWidth={2}
          markerEnd="url(#arrow)"
        />
        
        {/* Vectors */}
        <Line 
          from={{ x: xScale(0), y: yScale(0) }}
          to={{ x: xScale(5), y: yScale(3) }}
          stroke="#FF4136"  // Brighter red
          strokeWidth={3}
          markerEnd="url(#arrow)"
        />
        <Line 
          from={{ x: xScale(0), y: yScale(0) }}
          to={{ x: xScale(-2), y: yScale(4) }}
          stroke="#0074D9"  // Brighter blue
          strokeWidth={3}
          markerEnd="url(#arrow)"
        />
      </g>
    </svg>
    </div>
  );
};

export default VisxPlot;