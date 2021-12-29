import React from "react";
import Leaflet, { marker } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Button } from "react-bootstrap";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  MapConsumer,
  LayerGroup,
} from "react-leaflet";
// import SeedData from './map-seed.json';
import { useState, useEffect } from "react";
import { FaSnowflake } from "react-icons/fa";

// redirect icons
Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";
delete Leaflet.Icon.Default.prototype._getIconUrl;
Leaflet.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

function MainMap(props) {
  const [geoAddress, setGeoAddress] = useState({});
  const [center, setCenter] = useState([39.9526, -75.1652]);
  // const [testData, setTestData] = useState([]);
  const [inputAddress, setInputAddress] = useState("");
  const inputAddressHandler = (ev) => {
    setInputAddress(ev.target.value.replaceAll(" ", "+"));
  };
  console.log(testData);

  function getGeoAddress() {
    fetch(
      `https://sheltered-sea-91500.herokuapp.com/geocoding.geo.census.gov/geocoder/locations/onelineaddress?address=${inputAddress}&benchmark=2020&format=json`
    )
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const addressMatch = response.result.addressMatches[0];
        addressMatch.timeStamp = Date.now();
        setGeoAddress(addressMatch);
        setCenter([addressMatch.coordinates.y, addressMatch.coordinates.x]);
        props.setTestData([...props.testData, addressMatch]);
        return addressMatch;
      })
      .then((addressMatch) => {
        console.log(addressMatch);
        fetch("http://localhost:3000/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addressMatch),
        });
      });
  }

  function removeMarker(marker) {
    setTestData(
      testData.filter((mrk) => mrk.matchedAddress !== marker.matchedAddress)
    );
    console.log(marker, testData);
    // testData;
  }
  // confirm data
  // console.log(SeedData);
  // console.log(inputAddress);
  // console.log(geoAddress);
  // console.log(testData);

  return (
    <div>
      <h1 className="title">
        Snow Helper Proto <FaSnowflake></FaSnowflake>
      </h1>
      <form className="App">
        <label></label>
        <input
          className="input"
          name="input-address"
          id="input-address"
          onChange={(ev) => inputAddressHandler(ev)}
        ></input>
        <Button
          id="button"
          className="btn btn-primary"
          value="Submit"
          type="submit"
          onClick={(ev) => {
            ev.preventDefault();
            getGeoAddress();
            setInputAddress("");
          }}
        >
          <i class="bi bi-geo-alt-fill"></i>
          Request
        </Button>
      </form>
      <MapContainer
        // start coordinate
        center={center}
        // shown area on load
        // className='background-map'
        zoom={13}
        scrollWheelZoom={false}
        // needs height to render
        style={{ height: "50vh", width: "100vw" }}
      >
        <TileLayer
          // https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
          maxZoom={20}
        />
        <MapConsumer>
          {(map) => {
            console.log(map.getCenter());
            map.setView(center);
            // map.locate({
            //   position: 'topleft',
            //   keepCurrentZoomLevel: true,
            //   setView: 'once',
            //   initialZoomLevel: false,
            // });
            return null;
          }}
        </MapConsumer>

        {testData.map((marker) => {
          return (
            <LayerGroup>
              <Marker
                position={[marker.coordinates.y, marker.coordinates.x]}
                key={Math.floor(Math.random() * 1000000)}
                id={Math.floor(Math.random() * 1000000)}
              >
                <Popup>
                  <h3>SNOW REMOVAL REQUESTED AT:</h3>
                  <p>{marker.matchedAddress}</p>
                  <button onClick={() => removeMarker(marker)}>DONE</button>
                </Popup>
              </Marker>
            </LayerGroup>
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
    </div>
  );
}

export default MainMap;
