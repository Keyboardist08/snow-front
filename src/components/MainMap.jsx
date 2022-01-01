import React from 'react';
import Leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Button } from 'react-bootstrap';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
} from 'react-leaflet';
import { useState, useEffect } from 'react';
import { FaSnowflake } from 'react-icons/fa';
import '../resources/Frozbite-6YvAv.ttf';
import aim from '../resources/aim.png';
import { render } from '@testing-library/react';

// import SeedData from './map-seed.json';

// redirect icons due to icons not loading
// from installing package
Leaflet.Icon.Default.imagePath = '../node_modules/leaflet';
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

function MainMap({ markerData, setMarkerData, center, setCenter }) {
  // geo address
  const [geoAddress, setGeoAddress] = useState({});

  // map center
  // used to change map location when user searches address
  // const [center, setCenter] = useState([39.9526, -75.1652]);

  // string address from user input
  // 1400 John F Kennedy Blvd 19107
  const [inputAddress, setInputAddress] = useState('');

  // formats string address from user input to be passed to geocoder API
  const inputAddressHandler = (ev) => {
    setInputAddress(ev.target.value.replaceAll(' ', '+'));
  };

  // fetches all markers on load
  // useEffect(() => {
  //   fetch('https://snowfall-back-end.herokuapp.com/')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((response) => {
  //       setMarkerData(response);
  //     });
  // }, []);

  // fetches geo address from geocoder API with users string address input (after being formatted)
  // saves to db
  // then re-fetches new list of markers from db
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
        return addressMatch;
      })
      .then((addressMatch) => {
        console.log(addressMatch);
        fetch('https://snowfall-back-end.herokuapp.com/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(addressMatch),
        }).then(() => {
          fetch('https://snowfall-back-end.herokuapp.com/')
            .then((response) => {
              return response.json();
            })
            .then((response) => {
              setMarkerData(response);
              return markerData;
            });
        });
      });
  }

  // testing to confirm data being passed
  // console.log(SeedData);
  // console.log(inputAddress);
  // console.log(geoAddress);
  // console.log(testData);

  // 'done' button to delete a specific marker
  // DELETE request to remove from DB and filter to remove from front end
  const completeRequest = (marker) => {
    // fetch(`https://snowfall-back-end.herokuapp.com/${marker._id}`, {
    //   method: 'DELETE',
    // }).then(setMarkerData(markerData.filter((mrk) => mrk._id !== marker._id)));

    fetch(`https://snowfall-back-end.herokuapp.com/${marker._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ status: true }),
    }).then(setMarkerData(markerData.filter((mrk) => mrk.status === true)));
  };

  // locate user
  function locateUser(map) {
    map.locate({
      setView: true,
      maxZoom: 14,
    });
  }

  return (
    <div>
      <div className='title'>
        <h1>SNOW SCOOPER</h1>
        <p>
          Can't shovel all that snow outside? Ask a neighbor for some help! For
          anyone else looking to help, use the map below to locate requests.
        </p>
        <input
          className='input'
          placeholder='ex: 123 Main St 19147'
          name='input-address'
          id='input-address'
          onChange={(ev) => inputAddressHandler(ev)}
        ></input>
        <Button
          id='button'
          className='btn btn-primary'
          value='Submit'
          type='submit'
          onClick={(ev) => {
            ev.preventDefault();
            getGeoAddress();
            setInputAddress('');
          }}
        >
          <i class='bi bi-geo-alt-fill'></i>
        </Button>
      </div>
      <MapContainer
        id='map-container'
        // start coordinate
        center={center}
        // shown area on load
        // className='background-map'
        zoom={13}
        scrollWheelZoom={false}
        // needs height to render
        style={{ height: '100vh', width: '100%' }}
        tap={false}
      >
        <TileLayer
          // alternative map layers:
          // https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
          maxZoom={20}
        />
        <MapConsumer>
          {(map) => {
            console.log(map.getCenter());
            map.setView(center);
            // map.locate({
            //   setView: true,
            //   maxZoom: 14,
            // });

            return (
              <button id='locate-btn'>
                <img
                  src={aim}
                  alt='locate user icon'
                  onTouchStart={() => locateUser(map)}
                />
              </button>
            );
          }}
        </MapConsumer>
        {markerData.map((marker) => {
          if (marker.status === false) {
            return (
              <Marker
                position={[marker.coordinates.y, marker.coordinates.x]}
                key={Math.floor(Math.random() * 1000000)}
                id={Math.floor(Math.random() * 1000000)}
                onClick={(ev) => console.log('test')}
              >
                <Popup>
                  <h3>SNOW REMOVAL REQUESTED AT:</h3>
                  <p>{marker.matchedAddress}</p>
                  <button onClick={() => completeRequest(marker)}>DONE</button>
                </Popup>
              </Marker>
            );
          }
        })}

        {/* start testing */}
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
        {/* end testing */}
      </MapContainer>
    </div>
  );
}

export default MainMap;
