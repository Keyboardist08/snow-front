import React from 'react';

function Status(props) {
    return (
        <div className="container">
            <div className='list-box'>
                <ul>
                    <li>00-06 HOURS</li>
                    <li>06-18 HOURS</li>
                    <li>18-24//#endregion HOURS</li>
                    <li>INCOMPLETE</li>
                    <li>COMPLETE</li>
                </ul>

            </div>
        </div>
    );
}

export default Status;