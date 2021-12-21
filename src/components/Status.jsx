import React from 'react';
// import Collapse from 'react-bootstrap/Collapse'
// import Button from 'react-bootstrap/Button';
import { Accordion, Container } from 'react-bootstrap';



function Status() {
  
    return (
      <Container fluid>
        <Accordion  defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>NEW REQUESTS</Accordion.Header>
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
          <Accordion.Header>06-18 HOURS</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
          <Accordion.Header>18-24 HOURS</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
          <Accordion.Header>INCOMPLETE</Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>Address</li>
                <li>Address</li>
                <li>Address</li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
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