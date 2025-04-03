import React, { useEffect, useState } from "react";
import { useNavigate,Link } from 'react-router-dom';
import '../../LoginView.css';
import { displayAllCustomers } from "../../Services/CustomerService";

const AdminCustomerList = () => {
    const [customers, setCustomers] = useState([]);
    
    let navigate=useNavigate();
    useEffect(() => {
        fetchCustomers();
    }, []);

    const fetchCustomers = () => {
        displayAllCustomers().then((response) => setCustomers(response.data));
    };
    
    useEffect(() => {
        fetchCustomers();
    }, []);
    

    {/*const handleDelete = async (id) => {
        try {
            await deleteCustomerById(id);
            setCustomers(customers.filter(customer => customer.customerId !== id));
        } catch (error) {
            console.error("Error deleting customer:", error);
        }
    };*/}

    const handleUpdate = (id) => {
        console.log("Update customer with ID:", id);
        // You can navigate to an update page or open a modal here
    };
    const returnBack=()=>{
        navigate('/AdminMenu');
    }
    

    return (
        <div className="text-center">
            <div>
            <h2 className="text-center">Customer List</h2>
             <hr style={{height: "3px", borderWidth:0, color:"yellow", backgroundColor:"red"}}/>
              <div className = "row">
              <table className = "table table-striped table-bordered">
               <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Phone Number</th>
                        <th>Occupation</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.customerId}>
                            <td>{customer.customerId}</td>
                            <td>{customer.username}</td>
                            <td>{customer.email}</td>
                            <td>{customer.customerName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.mobile}</td>
                            <td>{customer.occupation}</td>
                            <td>{customer.status}</td>
                            
                            
                           <td>
                                <Link to={`/customer-update/${customer.customerId}`}>
                                    <button style={{ marginLeft: "10px" }} className="btn btn-info">
                                        Update
                                    </button>
                                </Link>
                                </td>
                                 {/*<td>
                                <button
                                    style={{ marginLeft: "10px" }}
                                    onClick={() => handleDelete(customer.customerId)}
                                    className="btn btn-danger"
                                >
                                    Delete
                                </button>
                            </td>*/}
                        </tr>
                    ))}
                </tbody>
            </table>
            <br/>
         <button style={{marginLeft: "10px"}} onClick={()=>returnBack()} className="btn btn-success">Return</button>    
            </div>
            </div>
        </div>
    );
};

export default AdminCustomerList;