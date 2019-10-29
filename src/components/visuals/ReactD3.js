import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import * as d3 from 'd3';

export const randomData = () => {
  return d3.shuffle([
    '😀',
    '😙',
    '🤓',
    '😎',
    '😍',
    '🤩',
    '😴',
    '😋',
    '😉',
  ]);
  // .slice(0, Math.floor(2 + Math.random() * 5));
};

const ReactD3 = ({ data }) => {
  const useD3 = (fn) => {
    const ref = useRef();
    useEffect(() => {
      fn(d3.select(ref.current));  
    });
    return ref;
  };

  const ref = useD3(root => {
    root.selectAll('div')
      .data(data, d => d)
      .join(
        enter => enter
          .append('div')
          .style('position', 'absolute')
          .style('left', 0)
          .style('top', '2rem')
          .style('padding-left', '5vw')
          // .style('transform', (d, i) => `translate(${i * 50}px,-50px)`) 
          .style('opacity', 0)
          .style('font-size', '2rem')
          .style('line-height', 1)
          .text(d => d),
        update => update,
        exit => exit
          .call(exit =>
            exit.transition()
              .duration(1000)
              .delay((d, i) => i * 100)
              .style('transform', (d, i) => `translate(${i * 50}px,50px)`)
              .style('opacity', 0)
              .remove()
          )
      )
      .transition()
      .duration(1000)
      .delay((d, i) => i * 100)
      .style('transform', (d, i) => `translate(${i * 30}px,50px)`)
      .style('opacity', 1);
  });

  return React.createElement('div', {
    ref,
    style: {
      padding: '0 5rem',
      height: '2rem',
      // width: '100%',
      margin: 'auto',
      background: 'transparent'
    }
  });
};

export default ReactD3;

ReactD3.propTypes = {
  data: PropTypes.array.isRequired
};
