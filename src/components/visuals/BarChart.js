import React, { useState, useEffect, useRef } from 'react';
import D3Component from './D3';
// import ReactD3, { randomData } from './ReactD3';
// import Fields from './Fields';
// import { getWordsApi } from '../../services/getWordsApi';
import words from '../../fixtures/words.json';
import * as d3 from 'd3';

// eslint-disable-next-line no-unused-vars
let vis;

export default function ReactComponent() {
  const [data, setData] = useState(null);
  const [width, setWidth] = useState(1440);
  const [height, setHeight] = useState(768);
  const [active, setActive] = useState(null);
  const [theArray, setTheArray] = useState([]);
  const refElement = useRef(null);

  // useEffect(updateVisOnResize, [width, height]);
  useEffect(fetchData, []);
  useEffect(handleResizeEvent, []);
  useEffect(initVis, [data]);
  useEffect(() => {
    addEntryClick();
  }, [active]);

  const addEntryClick = () => {
    setTheArray([...theArray, `${active === null ? '' : active} `]);
  };

  // const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  function fetchData() {
    // Promise.resolve().then(() => setData([...alphabet]));
    // getWordsApi().then(words => setData([...words]));
    const randos = pickRandom(words, 100);
    setData([...randos]);
    // const trimmed = words.slice(0, 150);
    // setData([...trimmed]);
  }

  const pickRandom = (arr, count) => {
    let _arr = [...arr];
    return [...Array(count)].map(()=> _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]); 
  };

  function handleResizeEvent() {
    let resizeTimer;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
      }, 300);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }

  function initVis() {
    if(data && data.length) {
      const d3Props = {
        data,
        width,
        height,
        onDatapointClick: setActive
      };
      vis = new D3Component(refElement.current, d3Props);
    }
  }

  // function updateVisOnResize() {
  //   vis && vis.resize(width, height);
  // }

  return (
    <main style={{
      // minWidth: '100vw',
      // minHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }}>
      {/* <Fields/> */}
      {/* <div style={{
        display: 'flex',
        justifyContent: 'center',
        // background: 'gold',
        color: 'red',
        fontWeight: 'bolder',
        fontSize: '1.5rem'
      }}>
        {active}
      </div> */}
      <span style={{
        // background: 'red'
      }}>Word play with d3 circles</span>
      {/* <ReactD3 data={randomData()}/> */}
      <input
        type="button"
        value="Clear"
        onClick={() => {
          d3.selectAll('.circle').selectAll('circle').style('fill', 'gold');
          setTheArray([]);
          setActive(null);
        }}
        style={{
          cursor: 'pointer',
          width: '3rem',
          margin: 'auto'
        }}
      />
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        // background: 'gold',
        color: 'red',
        fontWeight: 'bolder',
        fontSize: '1.5rem',
        height: '2rem',
        textAlign: 'center'
      }}>
        {theArray}
      </div>
      {/* <input
        type="button"
        value="Redo"
        onClick={() => {
          // console.log(data.sort());
          // d3.selectAll('.circle').remove();
          // setTimeout(() => {
          //   fetchData();
          // }, 500);
          // console.log(d3.selectAll(refElement.current));
        }}
        style={{
          cursor: 'pointer',
          width: '3rem',
          margin: 'auto'
        }}
      /> */}
      <div style={{
        // background: 'cyan',
        // border: '2px solid cyan',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
      }}
      ref={refElement}
      className="circle"
      />
    </main>
  );
}
