import React from "react";
import PropTypes from "prop-types";

import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { confirmable, createConfirmation } from "react-confirm";

class Confirmation extends React.Component {
  render() {
    const {
      proceedLabel,
      cancelLabel,
      title,
      confirmation,
      show,
      proceed,
      enableEscape = true
    } = this.props;
    return (
      <div className="static-modal">
        <Modal
          show={show}
          onHide={() => proceed(false)}
          backdrop={enableEscape ? true : "static"}
          keyboard={enableEscape}
        >
          <Modal.Header>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{confirmation}</Modal.Body>
          <Modal.Footer>
            <Button onClick={() => proceed(false)}>{cancelLabel}</Button>
            <Button
              className="button-l"
              bsStyle="primary"
              onClick={() => proceed(true)}
            >
              {proceedLabel}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

Confirmation.propTypes = {
  okLabbel: PropTypes.string,
  cancelLabel: PropTypes.string,
  title: PropTypes.string,
  confirmation: PropTypes.string,
  show: PropTypes.bool,
  proceed: PropTypes.func, // called when ok button is clicked.
  enableEscape: PropTypes.bool
};

export function confirm(
  confirmation,
  proceedLabel = "OK",
  cancelLabel = "cancel",
  options = {}
) {
  return createConfirmation(confirmable(Confirmation))({
    confirmation,
    proceedLabel,
    cancelLabel,
    ...options
  });
}



// import React from 'react';
// import {useState} from 'react';
// import Popup from './Popup';

// function Confirmation(props) {
//     const [isOpen, setIsOpen] = useState(false);
//     const togglePopup = () => {
//         setIsOpen(!isOpen);
//     }
//     return (
//         <div>
//             {isOpen && <Popup
//                 content={<>
//                     <b>ARE YOU SURE THIS ADDRESS IS COMPLETE?</b>
//                     <button>YES</button>
//                     <button>CANCEL</button>
//                 </>}
//             handleClose={togglePopup}
//             />}
//         </div>
//     );
// }

// export default Confirmation;