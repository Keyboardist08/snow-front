import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from 'react-leaflet';
// import SeedData from './map-seed.json';
import { useState, useEffect } from 'react';

// redirect icons
Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MainMap() {
  const [geoAddress, setGeoAddress] = useState({});
  const [center, setCenter] = useState([39.952724, -75.163526]);
  const [testData, setTestData] = useState([]);
  const [inputAddress, setInputAddress] = useState('');
  const inputAddressHandler = (ev) => {
    setInputAddress(ev.target.value.replaceAll(' ', '+'));
  };

  function getGeoAddress() {
    fetch(
      `https://sheltered-sea-91500.herokuapp.com/geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${inputAddress}&benchmark=2020&format=json`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const addressMatch = response.result.addressMatches[0];
        setGeoAddress(addressMatch);
        setCenter([addressMatch.coordinates.y, addressMatch.coordinates.x]);
        setTestData([...testData, addressMatch]);
      });
  }

  // confirm data
  // console.log(SeedData);
  // console.log(inputAddress);
  // console.log(geoAddress);
  console.log(testData);

  return (
    <div className='App'>
      <h1>Snow Helper Proto</h1>
      <form>
        <label></label>
        <input
          name='input-address'
          id='input-address'
          onChange={(ev) => inputAddressHandler(ev)}
        ></input>
        <button
          type='submit'
          onClick={(ev) => {
            ev.preventDefault();
            getGeoAddress();
            setInputAddress('');
          }}
        >
          Add Request
        </button>
      </form>
      <MapContainer
        // start coordinate
        center={center}
        // shown area on load

        zoom={13}
        scrollWheelZoom={false}
        // needs height to render
        style={{ height: '50vh', width: '100vw' }}
      >
        <TileLayer
          // https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          maxZoom={20}
        />
        <MapConsumer>
          {(map) => {
            console.log(map.getCenter());
            map.setView(center);
            return null;
          }}
        </MapConsumer>
        {testData.map((marker) => {
          return (
            <Marker
              position={[marker.coordinates.y, marker.coordinates.x]}
              key={Math.floor(Math.random() * 1000000)}
              id={Math.floor(Math.random() * 1000000)}
            >
              <Popup>
                <h3>SNOW REMOVAL REQUESTED AT:</h3>
                <p>{marker.matchedAddress}</p>
              </Popup>
            </Marker>
          );
        })}

        {/* {SeedData.map((marker) => {
          return (
            <Marker
              position={[marker.coordinates.x, marker.coordinates.y]}
              key={Math.floor(Math.random() * 1000000)}
              id={Math.floor(Math.random() * 1000000)}
            >
              <Popup>{marker.address}</Popup>
            </Marker>
          );
        })} */}
      </MapContainer>
      <button type='submit' onClick={(ev) => ev.preventDefault()}>
        done
      </button>
    </div>
  );
}

export default MainMap;
