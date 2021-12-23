import React from 'react';
import {useState} from 'react';
import Popup from './Popup';

function Confirmation(props) {
    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div>
            {isOpen && <Popup
                content={<>
                    <b>ARE YOU SURE THIS ADDRESS IS COMPLETE?</b>
                    <button>YES</button>
                    <button>CANCEL</button>
                </>}
            handleClose={togglePopup}
            />}
        </div>
    );
}

export default Confirmation;