import React from "react";
import { NavLink } from "react-router-dom";


export function Footer() {
    return (
        <footer className=" footers text-white py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>Hotel Name</h5>
                    <p>A description of your hotel and its services.</p>
                    <ul className="list-unstyled">
                        <li>Address: 123 Street, City, Country</li>
                        <li>Phone: +123 456 7890</li>
                        <li>Email: info@example.com</li>
                    </ul>
                </div>
                <div className="col-md-4 mb-4 mb-md-0">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">Rooms</NavLink></li>
                        <li><NavLink to="/facilities">Facilities</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Follow Us</h5>
                    <ul className="list-unstyled">
                        <li><NavLink to="#"><i className="fab fa-facebook-f"></i> Facebook</NavLink></li>
                        <li><NavLink to="#"><i className="fab fa-twitter"></i> Twitter</NavLink></li>
                        <li><NavLink to="#"><i className="fab fa-instagram"></i> Instagram</NavLink></li>
                    </ul>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <p className="text-center">© {new Date().getFullYear()} Star Hotel. All rights reserved.</p>
                </div>
            </div>
        </div>
    </footer>
    );
}