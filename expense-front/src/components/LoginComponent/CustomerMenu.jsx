import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../../AdminView.css';
import { FaUser, FaMoneyBillWave, FaSignOutAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";


const CustomerMenu = () => {
    const navigate = useNavigate();
    const [isCustomerOpen, setIsCustomerOpen] = useState(false);
    const [isExpenseOpen, setIsExpenseOpen] = useState(false);

    return (
        <div className="admin-container" >
            
            {/* Sidebar */}
            <div className="sidebar">
                <h2>Customer Panel</h2>

                <button className="menu-button" onClick={() => setIsCustomerOpen(!isCustomerOpen)}>
                    <FaUser className="icon" /> Customer {isCustomerOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isCustomerOpen && (
                    <div className="sub-menu">
                        <button className="sub-button" onClick={() => navigate("/CustomerAddition")}>
                            ➤ Customer Registration
                        </button>
                        <button className="sub-button" onClick={() => navigate("/CustomerList")}>
                            ➤ Customer Details
                        </button>
                        <button className="sub-button" onClick={() => navigate("/current-customer")}>
                            ➤ Current Customer
                        </button>
                    </div>
                )}

                <button className="menu-button" onClick={() => setIsExpenseOpen(!isExpenseOpen)}>
                    <FaMoneyBillWave className="icon" /> Expense {isExpenseOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>

                {isExpenseOpen && (
                    <div className="sub-menu">
                        <button className="sub-button" onClick={() => navigate("/ExpenseEntry")}>
                            ➤ Expense Entry
                        </button>
                        <button className="sub-button" onClick={() => navigate("/CustomerList")}>
                            ➤ Customer List
                        </button>
                        <button className="sub-button" onClick={() => navigate("/ExpenseReport")}>
                            ➤ Expense Report
                        </button>
                    </div>
                )}

                <button className="menu-button logout" onClick={() => navigate("/")}>
                    <FaSignOutAlt className="icon" /> Logout
                </button>
            </div>

            {/* Main Content */}
            <div className="main-content">
                {/* <img src={}/> */}
                <h1>Welcome to the Customer Dashboard</h1>
                <p>Select an option from the left panel.</p>
            </div>
        </div>
    );
};

export default CustomerMenu;
