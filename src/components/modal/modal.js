import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'
function MydModalWithGrid(props) {
    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
        </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <h4>Book a Product</h4>
                <Dropdown className="mb-4">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <label htmlFor="from">From</label>
                <input type="date" name="from" id="datefrom"/>
                
                <label htmlFor="to">To</label>
                <input type="date" name="to" id="dateto"/>
            </Modal.Body>
            <Modal.Footer>
                <Button >Yes</Button>
                <Button onClick={props.onHide}>No</Button>
            </Modal.Footer>
        </Modal>
    );
}

function Appsas() {
    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Book
      </Button>

            <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
        </>
    );
}
export default Appsas;