# Snow Helper

[![Ice fonts](https://see.fontimg.com/api/renderfont4/2z5e/eyJyIjoiZnMiLCJoIjoxNTIsInciOjE2MDAsImZzIjo5NSwiZmdjIjoiIzFBQ0VGNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U25vd2ZhbGw/estave.png)](https://www.fontspace.com/category/ice)

[![Ice fonts](https://see.fontimg.com/api/renderfont4/6YvAv/eyJyIjoiZnMiLCJoIjoxNTIsInciOjE2MDAsImZzIjo5NSwiZmdjIjoiIzFBQ0VGNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U25vd2ZhbGw/frozbite.png)](https://www.fontspace.com/category/ice)

[![Snow fonts](https://see.fontimg.com/api/renderfont4/RMo/eyJyIjoiZnMiLCJoIjoyMjksInciOjE2MDAsImZzIjoxNDMsImZnYyI6IiMxQUNFRjciLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/U25vd2ZhbGw/al-snowmen.png)](https://www.fontspace.com/category/snow)

[![Ice Cream fonts](https://see.fontimg.com/api/renderfont4/ZVLgB/eyJyIjoiZnMiLCJoIjoxMTcsInciOjE2MDAsImZzIjo3MywiZmdjIjoiIzFBQ0VGNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U25vd2ZhbGw/sweetie-summer-personal-use.png)](https://www.fontspace.com/category/ice-cream)

[![Snow fonts](https://see.fontimg.com/api/renderfont4/RyxW/eyJyIjoiZnMiLCJoIjoxNDksInciOjE2MDAsImZzIjo5MywiZmdjIjoiIzFBQ0VGNyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/U25vd2ZhbGw/cf-tuques-regular.png)](https://www.fontspace.com/category/snow)
Need help clearing out some snow? Use Snow Helper to request help from neighbors!

[About](#about)
<br>
[Using Snow Helper](#using-snow-helper)
<br>
[Features](#features)
<br>
[Installation](#installation)
<br>
[Setup](#setup)
<br>
[Tech Stack](#tech-stack)
<br>
[Additional Tools Used](#additional-tools-used)
<br>
[Contributing](#contributing)
<br>
[Credits](#credits)

## About

## Using Snow Helper

It's quick and easy to get started with Snow Helper. To begin, just click on the locate icon {insert icon} so that Snow Helper can find your location. Then follow the directions below to either submit a snow removal request or to volunteer to help.

### Need to remove some snow?

1. Enter your address in the input box and click submit
2. The map will place a pin on the map with your address
3. Your request will be active for 24 hours and then will be removed
4. If someone responds to your request, your request will also be removed

   - You will not receive a notification. We'll address this in future updates.
     <br>
     <br>

   ### Example:

### Feel like helping out a neighbor?

1. After finding your location, search the map for requests and view information by clicking on each pin.
2. ONLY when you complete a request, click 'done' that's located on the pin information pop-up.
3. Snow Helper will ask for a confirmation
4. After confirming, the request will be removed

   ### Example:

## Features

- Interactive map
  - Search for snow removal request markers on a map of your neighborhood
- Address search
  - An easy-to-use search bar that accepts a combination of address inputs (abbreviations and various address formats)
  - Required information:
    - House / Unit number
    - Street name
  - One or more of the following:
    - zipcode
    - state
    - city
- Snow request status indicators
  - A list of open snow removal requests that are filtered by when the request was created. Time intervals include markers that were created:
    - within 1 hour
    - within 1 - 3 hours
    - within 3 - 6 hours
    - 6 hours +
  - A list of completed snow removal requests on a rolling 24-hour time period
- Fresh and updated
  - The markers you see on the map and lists are 100% user reported and are always updated live
- No sign up required!
  - Help shouldn't be hindering in any way! There's no sign-up required and we don't collect any information about you other than your location for the map to function.

## Installation

### Adding Dependencies

Snow Helper uses various dependencies in order to render the map and to optimize the user experience. After forking and cloning, it's necessary to install all of the required dependencies:
<br>
`npm install`

### Setup Proxy

In order to place map markers accurately, the user string address captured from the form input, must be converted to geographic coordinates (longitude and latitude), also known as geocoding.

Snow Helper uses the Geocoder API from the [United States Census Bureau]('https://www.census.gov/programs-surveys/geography/technical-documentation/complete-technical-documentation/census-geocoder.html'). But due to CORS policy, you'll have to use a proxy to fetch geocoded data. You can use almost any CORS Proxy Server of your choice, or even create your own. The proxy used in the live Snow Helper application was built from [cors-anywhere]('https://github.com/Rob--W/cors-anywhere').

Please note that fetch URLs must be changed to a proxy server of your choice in order to operate. The proxy included in `MainMap.jsx` is under strict limitations for the sole purpose of servicing the live version of Snow Helper.

```
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
```

## Tech Stack

- Node.js
- React.js
- Bootstrap
- Leaflet
- Leaflet React

## Additional Tools Used

Figma

- For design and wireframing

Postman

- For API development
- API maintenance and monitoring

United States Census Bureau Geocoder

- For converting user address searches into longitude and latitude coordinates

## Contributing

We're always looking for feedback, so feel free to open an issue here:

https://github.com/Keyboardist08/snow-front

## Credits
