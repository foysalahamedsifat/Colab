import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";

function ReturnModal(props) {
  const [Product] = useContext(ProductContext);
  const [productdropdown] = useState([]);

  for (var i = 0; i < Product.length; i++) {
    if (productdropdown.length < Product.length) {
      const newItem = {
        label: Product[i].name + " " + Product[i].code,
        value: Product[i].code
      };
      console.log(newItem);
      productdropdown.push(newItem);
    }
  }

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book a Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        <Select options={productdropdown} className="mb-4" />
        <label className="mr-3" htmlFor="from">From</label>
        <input type="date" name="from" id="datefrom" />

        <label className="mr-2 ml-3" htmlFor="to">To</label>
        <input type="date" name="to" id="dateto" />
      </Modal.Body>
      <Modal.Footer>
        <Button>Yes</Button>
        <Button onClick={props.onHide}>No</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ReturnModal;
