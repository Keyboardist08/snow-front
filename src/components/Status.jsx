import React from 'react';
import Collapse from 'react-bootstrap/Collapse'
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';



function Status() {
  
    return (
      <Container fluid>
      <Accordion  defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
</Container>
    //   <div className ="container">
    //        <Button className="btn btn-primary">INCOMING REQUESTS</Button>
    //      <div className="content">
    //        <li>1234 Graham Rd. Brooke, PA 19011</li>
    //       </div>
    //      <button className="collapsible">06-18 HOURS</button>
    //       <div className="content">
    //        <li>1234 Graham Rd. Brooke, PA 19011</li>
    //      </div>
    //     <button className="collapsible">18-24 HOURS</button>
    //       <div className="content">
    //         <li>1234 Graham Rd. Brooke, PA 19011</li>
    //      </div>
    //     <button className="collapsible">INCOMPLETE</button>
    //       <div className="content">
    //       <li>1234 Graham Rd. Brooke, PA 19011</li>
    //       </div>
    //        <button variant="primary" className="collapsible">COMPLETE</button>
    //       <div className="content">
    //        <li>1234 Graham Rd. Brooke, PA 19011</li>
    //       </div>
    // </div> 
    );
}

export default Status;