import React from 'react';
import '../styles/Sidebar.css';
import { FaDollarSign, FaHome, FaPeopleArrows, FaPiggyBank, FaUserCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <header className="sidebar">
            <div className='sidebar-title'>
                <h1>Thrift</h1>
                <FaPiggyBank />
            </div>
            <nav>
                <Link to='/'>
                    <FaHome />
                    <p className="nav-link">Home</p>
                </Link>
                <Link to='/institutions'>
                    <FaPiggyBank />
                    <p className="nav-link">Institutions</p>
                </Link>
                <Link to='/accounts'>
                    <FaDollarSign />
                    <p className="nav-link">Accounts</p>
                </Link>
                <Link to='/transactions'>
                    <FaPeopleArrows />
                    <p className="nav-link">Transactions</p>
                </Link>
                <Link to='/users'>
                    <FaUserCog />
                    <p className="nav-link">User Profile</p>
                </Link>
            </nav>
        </header>
    );
}
