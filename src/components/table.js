import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'
import { getData } from "../services/data.service";
function TableData() {
    const [brands, setBrands] = useState({ count: 0, data: [] });
    useEffect(() => {
        getBrandData();
      }, []);
    
      function getBrandData() {
        (async () => {
          const response = await getData();
          console.log(response)
          return setBrands({ count: response.count, data: response.data });
          
        })();
        
      }
    return (
        <>
            <div className="container">
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default TableData
