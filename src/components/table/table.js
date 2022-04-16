import React, {  useState } from "react";
import Table from 'react-bootstrap/Table'
// import { getData } from "../../services/data.service";
import {useContext} from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import Nav from '../nav/nav';
import '../table/table.css';
import Modal from '../modal/modal';


function TableData() {
    const [brands, setBrands] = useState({ count: 0, data: [] });
    const [modalShow, setModalShow] = useState(false);

    const [Product, setUsers] = useContext(ProductContext);
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = Product.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(Product)
        }
    }
    console.log(Product)

    var i=1;
    // useEffect(() => {
    //     getBrandData();
    // }, []);

    // function getBrandData() {
    //     (async () => {
    //         const response = await getData();
    //         console.log(response)
    //         return setBrands({ count: response.count, data: response.data });

    //     })();

    // }
    return (
       
            <div className="container">
                <Nav />
                <input className="form-control mb-3" type="search" name="search" icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)} id="search" />

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>I</th>
                            <th>Name</th>
                            <th>Co</th>
                            <th>Availabi</th>
                            <th>Need to Re</th>
                            <th>Durabil</th>
                            <th>Milea</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        searchInput.length > 1 ? (
          filteredResults.map(product =>
            <tr>
            <td>{i++}</td>
            <td>{product.name}</td>
            <td>{product.code}</td>
            <td>{product.availability}</td>
            <td>{product.needing_repair}</td>
            <td>{product.durability}</td>
            <td>{product.mileage}</td>
        </tr>
           
            )):(
                Product.map(product =>
                    <tr>
                    <td>{i++}</td>
                    <td>{product.name}</td>
                    <td>{product.code}</td>
                    <td>{product.availability}</td>
                    <td>{product.needing_repair}</td>
                    <td>{product.durability}</td>
                    <td>{product.mileage}</td>
                </tr>
                   
                    )
            )
      }
    
                       
                    </tbody>
                </Table>
                <div className="btnGroup">
                    <Modal />
                    {/* <button className="btn btn-primary" type="submit">book</button> */}
                    <button className="btn btn-primary" type="submit">return</button>
                </div>
            </div>
        
    )
}

export default TableData
