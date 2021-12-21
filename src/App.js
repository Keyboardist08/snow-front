// import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import MainMap from './components/MainMap';
import RequestForm from './components/RequestForm';
import Status from './components/Status';
import { useState, useEffect } from 'react';

function App() {
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    getAddress(searchString);
  }, []);

  function getAddress(searchString) {
    console.log('it works');
    // const url = //MAP API
  }

  fetch()
    .then((response) => response.json())
    .then((response) => {
      setSearchString('');
    })
    .catch(console.error);

  // fetch ()
  //   .then(response => response.json())
  //   .then(response => {
  //     setSearchString('');
  //   })
  //   .catch(console.error);

  function handleChange(event) {
    setSearchString(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    getAddress(searchString);
  }

  return (
    <>
      <nav className='App'>
        <Search
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchString={searchString}
        />
        <RequestForm />
      </nav>
      <main>
        <MainMap />
      </main>
      <footer className='bottom'>
        <Status />
      </footer>
    </>
  );
}

export default App;
