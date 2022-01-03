/* eslint-disable no-undef */
import React from 'react';
import {useState} from 'react'
import Popup from './Popup';
import { Button } from 'react-bootstrap';
import {ImInfo} from 'react-icons/im';


function UserManual() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <Button id="infoButton" variant='light'  size="sm" className="btn btn-primary" type="submit" value="Submit" onClick={togglePopup} ><ImInfo/></Button>
            {isOpen && <Popup
                content={<>
                   <p>
                    Can't shovel all that snow outside? Ask a neighbor for some help! For
                    anyone else looking to help, use the map below to locate requests.
                   </p>
                </>}
            handleClose={togglePopup}
            />}
        </div>
    );
}

export default UserManual;