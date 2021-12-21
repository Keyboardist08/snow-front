/* eslint-disable no-undef */
import React from 'react';
import {useState} from 'react'
import Popup from './Popup';
import { Button } from 'react-bootstrap';


function requestForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
        <Button id="button" className="btn btn-primary" type="submit" value="Submit" onClick={togglePopup} ><i class="bi bi-geo-alt-fill"></i></Button>
            {isOpen && <Popup
                content={<>
                    <b>Submit Your Request Here</b>
                    <form className='form-horizontal'>
                        <input 
                            placeholder="TYPE YOUR ADDRESS HERE"
                            type="text"
                            name="searchString"
                            required
                        />
                    </form>
                    <button>submit</button>
                </>}
            handleClose={togglePopup}
            />}
        </div>
    );
}

export default requestForm;