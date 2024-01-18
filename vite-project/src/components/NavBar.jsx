import React from "react";
import Button from "../assets/Button";
import './components.css';

const NavBar = () => {


    return (
        <div className="container-lg">

            <nav className="navbar navbar-expand-lg main-nav">

                <div className="container-fluid">

                    <a className="navbar-brand font-md" href="#">Shortly</a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbars" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbars">
                        <ul className="navbar-nav me-lg-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Resources</a>
                            </li>

                        </ul>

                        <hr className="hr-nav d-lg-none"></hr>
                        <form className="button-section">

                            <Button  color="transparent" width="100px" height="45px" border="115px" colorL="hsl(0, 0%, 75%)" text="Login" />

                            <Button color="hsl(180, 66%, 49%)" width="100px" height="45px" border="115px" colorL="white" text="Sign Up" />

                        </form>
                    </div>
                    
                </div>

            </nav>

        </div>
    )
}


export default NavBar;