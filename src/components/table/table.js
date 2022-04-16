import React, { useState } from "react";
import Table from 'react-bootstrap/Table'
import { useContext } from "react";
import { ProductContext } from "../ProductContext/ProductContext";
import Nav from '../nav/nav';
import '../table/table.css';
import BookModal from '../book/BookModal';
import ReturnModal from '../return/returnModal'


function TableData() {
    const [bookModalShow, setBookModalShow] = useState(false);
    const [returnModalShow, setReturnModalShow] = useState(false);

    const [Product] = useContext(ProductContext);
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
        else {
            setFilteredResults(Product)
        }
    }
    console.log(Product)

    var i = 1;
    return (

        <div className="container">
            <Nav />
            <input className="form-control mb-3" type="search" name="search" icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)} id="search" />

            <Table bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
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

                            )) : (
                                Product.map(product =>
                                    <tr>
                                        <td>{i++}</td>
                                        <td>{product.name}</td>
                                        <td>{product.code}</td>
                                        <td>{product.availability.toString()}</td>
                                        <td>{product.needing_repair.toString()}</td>
                                        <td>{product.durability}</td>
                                        <td>{product.mileage}</td>
                                    </tr>

                                )
                            )
                    }


                </tbody>
            </Table>
            <div className="btnGroup">
                <BookModal show={bookModalShow} onHide={() => setBookModalShow(false)} />
                <ReturnModal show={returnModalShow} onHide={() => setReturnModalShow(false)} />
                <button className="btn btn-primary" type="submit" onClick={() => setBookModalShow(true)}>Book</button>
                <button className="btn btn-primary" type="submit" onClick={() => setReturnModalShow(true)}>return</button>
            </div>
        </div>

    )
}

export default TableData
