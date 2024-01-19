import React from "react";
import ConnectButton from "../assets/ConnectButton";
import './components.css';


const NavBar = () => {


    return (
        <div className="container-lg font">

            <nav className="navbar navbar-expand-lg main-nav">

                <div className="container-fluid p-0 ">

                    <a className="navbar-brand font-md" href="#">Shortly</a>

                    <button className="navbar-toggler pe-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbars" aria-controls="navbars" aria-expanded="false">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbars">
                        <ul className="navbar-nav me-md-auto mb-2 mb-md-0">
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

                        <hr className="hr-nav d-md-none"></hr>
                        <form className="button-section">

                            <ConnectButton  bg="transparent" width="80%" height="45px" border="115px" colorL="hsl(0, 0%, 75%)" text="Login" />

                            <ConnectButton bg="hsl(180, 66%, 49%)" width="100%" height="45px" radius="115px" colorL="white" text="Sign Up" />

                        </form>
                    </div>
                    
                </div>

            </nav>

        </div>
    )
}


export default NavBar;