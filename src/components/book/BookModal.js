import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";

function BookModal(props) {
  const [Product] = useContext(ProductContext);
  const [productdropdown] = useState([]);

  const [selectedValue, setSelectedValue] = useState('p1');
  const [isSelected, setisSelected] = useState(false)
  const [PriceSelected, setPriceSelected] = useState(0)
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleChange = e => {
    setSelectedValue(e.value);
  }
   


  const setPrice= () => {
    for (var i = 0; i < Product.length; i++) {
          if(Product[i].code === selectedValue)
          {
            setPriceSelected(Product[i].price);
          }
    }
    
  }
  

  const yesSelected = () => {
    
    setisSelected(true);
    setPrice();
   }
   const NoSelected = (e) => {
    setisSelected(false);
    setShow(false);
   }


  for (var i = 0; i < Product.length; i++) {
    if (productdropdown.length < Product.length) {
      const newItem = {
        label: Product[i].name + " " + Product[i].code,
        // change from recipeName to itemName
        value: Product[i].code
      };
      productdropdown.push(newItem);
    }
  }

  
  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Book a Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
       
        {
           
          isSelected ? 
          (
            <div>
                <h3>Your estimated price is {PriceSelected}. Do you want to procedure?</h3>
            </div>
          ) :
          (
            <div>
            <Select options={productdropdown} className="mb-4" id="productSelect" name="Product" 
         value={productdropdown.find(obj => obj.value === selectedValue)} // set selected value
         onChange={handleChange} 
        />
        <label className="mr-3" htmlFor="from">From</label>
        <input type="date" name="from" id="datefrom" />

        <label className="mr-2 ml-3" htmlFor="to">To</label>
        <input type="date" name="to" id="dateto" />
        </div>

          )
          

        }
      </Modal.Body>
      <Modal.Footer>
        {
          isSelected?(
            <div>
            <Button onClick={(e) => yesSelected()}>Yes</Button>
            <Button onClick={(e)=> NoSelected()}>No</Button>
            </div>
           
          ):(
            <div>
            <Button onClick={(e) => yesSelected()}>Yes</Button>
            <Button onClick={props.onHide}>No</Button>
            </div>
          )
        }
      
      </Modal.Footer>
    </Modal>
  );
}

export default BookModal;
