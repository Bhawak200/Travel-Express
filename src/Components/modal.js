import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF,faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "../App.css"
function modal(props) {
   return (
     <Modal
       {...props}
       size="lg"
       aria-labelledby="contained-modal-title-vcenter"
       centered
     >
       <Modal.Body style={{backgroundColor:"black"}}>
       <div className="mb-0 p-0">
         <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
            <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/115098447" title="nature"
             allowfullscreen></iframe>
          </div>
          </div>
       </Modal.Body>
       <Modal.Footer style={{backgroundColor:"lightgrren"}}>
         <div className="justify-content-left flex-column flex-md-row">
       <span className=" btn-floating btn-sm btn-fb modalmargin"> <FontAwesomeIcon icon={faFacebookF} size='3x' fixedWidth color="blue"  /></span>
        <span className="  btn-floating btn-sm btn-fb  modalmargin"><FontAwesomeIcon icon={faEnvelope} size='3x' fixedWidth color='red'/></span>
        <span className=" btn-floating btn-sm btn-fb  modalmargin"><FontAwesomeIcon icon={faLinkedin} size='3x' fixedWidth color='blue'/></span>
        </div>
         <Button onClick={props.onHide} className="col-12">Close</Button>
    
       </Modal.Footer>
     </Modal>
   );
 }
 
export default modal;