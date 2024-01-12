import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';

const Map = ({ data, width, height }) => {
  const ref = useRef();
  const [usData, setUsData] = useState(null);

  useEffect(() => {
    fetch('path/to/us-states.json')
      .then(response => response.json())
      .then(data => setUsData(data));
  }, []);

  useEffect(() => {
    if (!usData) return;

    const width = 500;
    const height = 300;

    const svg = d3.select(ref.current);
    const projection = d3.geoAlbersUsa().fitSize([width, height], usData);
    const path = d3.geoPath().projection(projection);

    svg.selectAll('path')
      .data(usData.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => {
        // Replace this with your own logic for coloring states
        return d.properties.name === 'California' ? 'red' : 'blue';
      });
  }, [usData, width, height]);

  return <svg ref={ref} width={width} height={height} />;
};

export default Map;