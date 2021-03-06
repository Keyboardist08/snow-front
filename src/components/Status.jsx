import React from 'react';
// import Collapse from 'react-bootstrap/Collapse'
// import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';
import { BsFillGeoAltFill } from 'react-icons/bs';

function Status({ markerData, setCenter }) {
  if (markerData.length < 1) {
    return null;
  } else {
    console.log('start');
    console.log(markerData[0].createdAt);

    const recentListOne = [];
    const recentListTwo = [];
    const recentListThree = [];
    const recentListFour = [];

    markerData.forEach((marker) => {
      if (marker.status === false) {
        let currentDate = new Date();
        let currentUnixDate = currentDate.getTime();
        let markerDate = new Date(marker.createdAt);
        let markerUnixDate = markerDate.getTime();
        console.log(markerUnixDate);
        console.log(currentUnixDate);
        console.log(marker.status);

        // within 1 hour
        if (currentUnixDate - markerUnixDate < 1000 * 60 * 60 * 1) {
          recentListOne.push(marker);
        } else if (
          // within 1 - 3 hours
          currentUnixDate - markerUnixDate >= 1000 * 60 * 60 * 1 &&
          currentUnixDate - markerUnixDate < 1000 * 60 * 60 * 3
        ) {
          recentListTwo.push(marker);
        } else if (
          // within 3 - 6 hours
          currentUnixDate - markerUnixDate >= 1000 * 60 * 60 * 3 &&
          currentUnixDate - markerUnixDate < 1000 * 60 * 60 * 6
        ) {
          recentListThree.push(marker);
        } else if (currentUnixDate - markerUnixDate > 1000 * 60 * 60 * 6) {
          // 6 hours +
          recentListFour.push(marker);
        }
      }
    });

    // recenter map on request link click in list
    function recenterMap(marker) {
      setCenter([marker.coordinates.y, marker.coordinates.x]);
    }

    return (
      <Container fluid>
        <h3 className='status-title'>Live Status</h3>
        <Accordion defaultActiveKey='0'>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-0' />
              WITHIN 1 HOUR AGO
            </Accordion.Header>
            <Accordion.Body>
              {/* Still need to create checkboxes and color-codes next to each address */}
              <ul>
                {recentListOne.map((marker) => {
                  return (
                    <li onClick={() => recenterMap(marker)}>
                      {marker.matchedAddress}
                    </li>
                  );
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-1' />1 - 3 HOURS AGO
            </Accordion.Header>
            <Accordion.Body>
              {/* Still need to create checkboxes and color-codes next to each address */}
              <ul>
                {recentListTwo.map((marker) => {
                  return (
                    <li onClick={() => recenterMap(marker)}>
                      {marker.matchedAddress}
                    </li>
                  );
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-6' />3 - 6 HOURS AGO
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {recentListThree.map((marker) => {
                  return (
                    <li onClick={() => recenterMap(marker)}>
                      {marker.matchedAddress}
                    </li>
                  );
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-18' />6 + HOURS AGO
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {recentListFour.map((marker) => {
                  return (
                    <li onClick={() => recenterMap(marker)}>
                      {marker.matchedAddress}
                    </li>
                  );
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          {/* <Accordion.Item eventKey='4'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-incomplete' />
              INCOMPLETE
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item> */}
          <Accordion.Item eventKey='5'>
            <Accordion.Header>
              <BsFillGeoAltFill className='pin-complete' />
              COMPLETED TODAY
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                {/* rolling 24 hr list of requests that have been completed */}
                {markerData.map((marker) => {
                  if (marker.status === true) {
                    return (
                      <li onClick={() => recenterMap(marker)}>
                        {marker.matchedAddress}
                      </li>
                    );
                  }
                })}
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
  }
}

export default Status;
