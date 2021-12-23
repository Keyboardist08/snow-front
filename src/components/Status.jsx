import React from 'react';
// import Collapse from 'react-bootstrap/Collapse'
// import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';



function Status() {
  
    return (
      <Container fluid>
        <Accordion  defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>00-01 HOUR</Accordion.Header>
            <Accordion.Body>
              {/* Still need to create checkboxes and color-codes next to each address */}
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>01-06 HOURS</Accordion.Header>
            <Accordion.Body>
              {/* Still need to create checkboxes and color-codes next to each address */}
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>06-18 HOURS</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>18-24 HOURS</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
          <Accordion.Header>INCOMPLETE</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
          <Accordion.Header>COMPLETE</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    );
}

export default Status;