import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import Select from "react-select";
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";

function ReturnModal(props) {
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
           Return a Product
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="show-grid">
        
      {
           
           isSelected ? 
           (
             <div>
                 <h3>Your total price is {PriceSelected}. Do you want to procedure?</h3>
             </div>
           ) :
           (
             <div>
             <Select options={productdropdown} className="mb-4" id="productSelect" name="Product" 
          value={productdropdown.find(obj => obj.value === selectedValue)} // set selected value
          onChange={handleChange} 
         />
         <input className="form-control mb-3" type="text" name="UserMessage" placeholder="User Message" id="UserMessage" />
 
       
         </div>
 
           )
           
 
         }
      </Modal.Body>
      <Modal.Footer>
        {
          isSelected ? 
          (          
              <Button onClick={(e)=> NoSelected()}>Confirm</Button>

           
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

export default ReturnModal;
