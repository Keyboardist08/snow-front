// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import Search from './components/Search';
import MainMap from './components/MainMap';
// import RequestForm from './components/RequestForm';
import Status from './components/Status';
// import { useState, useEffect } from 'react';
import Drawer from 'react-bottom-drawer';
import { FcMenu } from "react-icons/fc";
import {Button} from 'react-bootstrap';
import DoneButton from './components/DoneButton';
import Confirmation from './components/Confirmation';



function App() {
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  // const [searchString, setSearchString] = useState('');

  // useEffect(() => {
  //   getAddress(searchString);
  // }, []);

  // function getAddress(searchString) {
  //   console.log('it works');
  //   // const url = //MAP API
  // }

  // // fetch ()
  // //   .then(response => response.json())
  // //   .then(response => {
  // //     setSearchString('');
  // //   })
  // //   .catch(console.error);

  // function handleChange(event) {
  //   setSearchString(event.target.value);
  // }

  // function handleSubmit(event) {
  //   event.preventDefault();
  //   getAddress(searchString);
  // }

  return (
    <>
      {/* <nav className='App'>
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <RequestForm />
      </nav> */}
      <main className='map'>
        <MainMap />
      </main>
      <footer className='bottom'>
      <center className='status-bars'>
      <Button variant="outline-secondary" className='open-btn' onClick={openDrawer}>
          <FcMenu/>
      </Button>
      </center>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
      <Status />
      </Drawer>
      </footer>
    </>
  );
}

export default App;
