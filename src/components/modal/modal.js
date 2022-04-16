import React, { useEffect, useState } from "react";
import Modal from 'react-bootstrap/Modal'
import { Button } from 'react-bootstrap';
import Select from 'react-select';
import Dropdown from 'react-bootstrap/Dropdown';
import {useContext} from "react";
import { ProductContext } from "../ProductContext/ProductContext";

function MydModalWithGrid(props) {
    const [Product, setUsers] = useContext(ProductContext);
    const [productdropdown, setProduct] = useState([]);

    for(var i=0;i< Product.length;i++)
    {
        if(productdropdown.length<Product.length )
        {
            const newItem = {
                label: (Product[i].name + ' '+ Product[i].code),
                 // change from recipeName to itemName
                value: Product[i].code,
              };
              console.log(newItem)
            productdropdown.push(newItem);
        }
       

    }

    return (
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Using Grid in Modal
        </Modal.Title>
            </Modal.Header>
            <Modal.Body className="show-grid">
                <h4>Book a Product</h4>
                <Select options={productdropdown} />
                {/* <Dropdown className="mb-4">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Product
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            Product.map(user =>
                             <Dropdown.Item href="#/action-1/{user.code}">{user.name}/ {user.code}</Dropdown.Item>

                            )
                        }
                       
                    </Dropdown.Menu>
                </Dropdown> */}
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