import React from 'react'
import './Details.css'
function Details({input}) {
  return (
    
    <div className='tablebox' >   
                <table className='styled-table'>
                    <thead>
                        <tr>
                            
                            <th>{input.title1}</th>
                            <th></th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Phone no</th>
                            <th>Email</th>
                            <th>House Name</th>
                            <th>Street Name</th>
                            <th>City Name</th>
                            <th>State</th>
                            <th>DOB</th> 
                        
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
    </div>
        )
    }

export default Details


            
