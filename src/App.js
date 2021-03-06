// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Search from './components/Search';
import MainMap from './components/MainMap';
// import RequestForm from './components/RequestForm';
import Status from './components/Status';
// import { useState, useEffect } from 'react';
import Drawer from 'react-bottom-drawer';
import { FcMenu } from 'react-icons/fc';
import { Button } from 'react-bootstrap';
import DoneButton from './components/DoneButton';
import Confirmation from './components/Confirmation';
import { useEffect, useState } from 'react';
import snowflake from './resources/snowflake.png';
import snowflakeBlue from './resources/snowflake-blue.png';

function App() {
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
  // marker data
  const [markerData, setMarkerData] = useState([]);
  const [center, setCenter] = useState([39.9526, -75.1652]);

  // fetches all markers on load
  useEffect(() => {
    fetch('https://snowfall-back-end.herokuapp.com/')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setMarkerData(response);
      });
  }, []);
  return (
    <>
      <main className='map'>
        <MainMap
          markerData={markerData}
          setMarkerData={setMarkerData}
          center={center}
          setCenter={setCenter}
        />
      </main>
      <footer className='bottom'>
        <center className='status-bars'>
          <Button
            variant='outline-secondary'
            className='open-btn'
            onClick={openDrawer}
          >
            <FcMenu />
            {/* <img src={snowflakeBlue} /> */}
          </Button>
        </center>
        <Drawer
          duration={250}
          hideScrollbars={true}
          onClose={closeDrawer}
          isVisible={isVisible}
        >
          <Status markerData={markerData} setCenter={setCenter} />
        </Drawer>
      </footer>
    </>
  );
}

export default App;
