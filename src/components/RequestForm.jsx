/* eslint-disable no-undef */
import React from 'react';
import {useState} from 'react'
import Popup from './Popup';


function requestForm() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen, setIsOpen] = useState(false);
    
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            <input type="submit" value="icon" onClick={togglePopup} />
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