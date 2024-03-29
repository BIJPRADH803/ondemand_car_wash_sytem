import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Admin.css';

const Admin = () => {
    const [washers, setWashers] = useState([])

    let navigate = useNavigate()


    useEffect(() => {
        fetch("http://localhost:8084/admin/washpack").then(result => {
            result.json().then(
                resp => {
                    setWashers(resp)
                    console.log(resp)
                })
        })
    }, [])

    



    return (

        <div>
            <div>
                {/* <h1 className="bookAppointTitle mb-5 text-center">Wash pack</h1> */}
            
            <h4  style={{ color: "red", backgroundColor:"powderblue", fontSize:"30px"}} className = "text-center">Wash pack</h4>
            <hr/>

            </div>
             <div className="bookingContainer">
            {washers.map((emp, ind) => (
                <div className="booking" >

                    <div>
                        <p className="bk3">Id : {emp.id}</p>
                        <p className="bk3"> Name : {emp.packname}</p>
                        <p className="bk3">Cost: {emp.cost}</p>
                        <p className="bk3">Description : {emp.description}</p>
                    </div>
                    <div>
                        <button className=" bookBtn bookBtnUpdate"onClick={() => { navigate(`/updatePack/${emp.id}`);}}>UpdatePack</button>&nbsp;&nbsp;
                <button className=" bookBtn bookBtnUpdate" onClick={() => { navigate('/washer') }}>Orderdetails</button>
                    </div>
                           {/* <hr style={{ marginTop: "30px" }} /> */}
                </div>
            ))
            }
        </div>

        </div>
    )
}

export default Admin