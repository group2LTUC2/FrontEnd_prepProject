import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './NewAlert.css';

function NewAlert(props) {
  const [showAlert, setShowAlert] = useState(true);

  const handleClose = () => {
    setShowAlert(false);
    props.closeAlert()
  };

  return (
    showAlert && (
      <div className="alert-container">
        <div className="alert-icon">
          <FontAwesomeIcon icon={faCheck} />
        </div>
        <div className="alert-text">
          {props.message}
        </div>
        <div className="alert-close" onClick={handleClose}>
          &times;
        </div>
      </div>
    )
  );
}

export default NewAlert;