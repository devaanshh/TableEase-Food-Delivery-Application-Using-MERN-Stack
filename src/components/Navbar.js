import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../screens/Cart';
import Logo from './TE.png'; // Assuming TE.png is the name of your logo image file

export default function Navbar(props) {
    const [cartView, setCartView] = useState(false);
    localStorage.setItem('temp', "first");
    let navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate("/login");
    };

    const loadCart = () => {
        setCartView(true);
    };

    const items = useCart();

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark position-sticky" style={{ backgroundColor: "#ffc107", boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{ color: "#000000" }}>
                        <img src={Logo} alt="TableEase Logo" height="60" />
                        <span className="navbar-brand-name" style={{ fontWeight: "bold", fontSize: "1.5rem", marginTop:"10px"}}>TableEase</span>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/" style={{ color: "#000000" }}>Home</Link>
                            </li>
                            {(localStorage.getItem("token")) ?
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myorder" style={{ color: "#000000" }}>My Orders</Link>
                                </li> : ""}
                        </ul>
                        {(!localStorage.getItem("token")) ?
                            <form className="d-flex">
                                <Link className="btn text-light" to="/login" style={{ backgroundColor: "#000000", border: "1px solid #000000", margin: "0 5px", fontSize: "1.2rem" }}>Login</Link>
                                <Link className="btn text-light" to="/signup" style={{ backgroundColor: "#000000", border: "1px solid #000000", margin: "0 5px", fontSize: "1.2rem" }}>Signup</Link>
                            </form> :
                            <div>
                                <div className="btn text-light" onClick={loadCart} style={{ backgroundColor: "#000000", border: "1px solid #000000", margin: "0 5px", fontSize: "1.2rem" }}>
                                    <Badge color="secondary" badgeContent={items.length}>
                                        <ShoppingCartIcon />
                                    </Badge>
                                    Cart
                                </div>
                                <button onClick={handleLogout} className="btn text-light" style={{ backgroundColor: "#000000", border: "1px solid #000000", margin: "0 5px", fontSize: "1.2rem" }}>Logout</button>
                            </div>}
                    </div>
                </div>
            </nav>
            {cartView ? <Modal onClose={() => setCartView(false)}><Cart></Cart></Modal> : ""}
        </div>
    );
}