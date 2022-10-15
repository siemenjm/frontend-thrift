import React from 'react';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <header className="sidebar">
            <h1>Thrift Sidebar</h1>
            <nav>
                <Link to='/'>
                    <p className="nav-link">Home</p>
                </Link>
                <Link to='/institutions'>
                    <p className="nav-link">Institutions</p>
                </Link>
                <Link to='/accounts'>
                    <p className="nav-link">Accounts</p>
                </Link>
                <Link to='/transactions'>
                    <p className="nav-link">Transactions</p>
                </Link>
                <Link to='/users'>
                    <p className="nav-link">User Profile</p>
                </Link>
            </nav>
        </header>
    );
}
