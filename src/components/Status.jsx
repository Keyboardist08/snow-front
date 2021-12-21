import React from 'react';
import Collapse from 'react-bootstrap/Collapse'
import {useState} from 'react';
import { Button } from 'bootstrap';



function Status() {
  
    return (
      <div className ="container">
           <button class="collapsible">INCOMING REQUESTS</button>
         <div class="content">
           <li>1234 Graham Rd. Brooke, PA 19011</li>
          </div>
         <button class="collapsible">06-18 HOURS</button>
          <div class="content">
           <li>1234 Graham Rd. Brooke, PA 19011</li>
         </div>
        <button class="collapsible">18-24 HOURS</button>
          <div class="content">
            <li>1234 Graham Rd. Brooke, PA 19011</li>
         </div>
        <button class="collapsible">INCOMPLETE</button>
          <div class="content">
          <li>1234 Graham Rd. Brooke, PA 19011</li>
          </div>
           <button variant="primary" class="collapsible">COMPLETE</button>
          <div class="content">
           <li>1234 Graham Rd. Brooke, PA 19011</li>
          </div>
    </div> 
    );
}

export default Status;