import React from "react";
import Newgif from "./img/new.gif";
import Yahoo from "./img/icons8-yahoo-24.png";
import Linkedin from "./img/icons8-linkedin-24.png";
import Instagram from "./img/icons8-instagram-24.png";
import Facebook from "./img/icons8-facebook-26.png";
import Twitter from "./img/icons8-twitter-24.png";
const Footer = () => {
    return (
        <div>
            <link href="https://kit-pro.fontawesome.com/releases/v5.15.2/css/pro.min.css" rel="stylesheet"></link>
            <footer className="page-footer bg-dark">
                <div className="bg-success">
                    <div className="container">
                        <div className="row py-3 d-flex align-items-center">
                            <div className="col-md-12 text-center">
                                <a href="https://www.facebook.com/shivajicollege.akola"><img src={Facebook} className="text-white mr-4" title="Facebook" /></a>
                                <a href="#"><img src={Twitter} className="text-white mr-4" title="Twitter" /></a>
                                <a href="#"><img src={Instagram} className="text-white mr-4" title="Instagram" /></a>
                                <a href="#"><img src={Yahoo} className="text-white mr-4" title="Yahoo" /></a>
                                <a href="#"><img src={Linkedin} className="text-white mr-4" title="Linkedin" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container text-center text-md-left mt-5">
                    <div className="row">
                        <div className="col-md-3 mx-auto mb-2">
                            <h5 className="text-uppercase font-weight-bold" style={{ color: "white" }}>Contact us</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ width: "125px", height: "2px" }} />
                            <h6 style={{ color: "white" }}><i className="fas fa-map-marker-alt"></i> Shivaji Park, Akot Road, Pin-Code: 444001 (Maharashtra)</h6><br />
                            <h6 style={{ color: "white" }}>website: www.shivajiakola.ac.in</h6><br />
                            <h6 style={{ color: "white" }}>Email: principal@shivajiakola.ac.in</h6>
                        </div>
                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold" style={{ color: "white" }}>Important Links</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ width: "180px", height: "2px" }} />
                            <ul className="list-unstyled">
                                <a className="mt-4" href="http://www.shivajiakola.ac.in/" style={{ textDecoration: "none", color: "white" }}>Shivaji College</a><br /><br />
                                <a href="https://www.sgbau.ac.in/" style={{ textDecoration: "none", color: "white" }}>Amravati University</a><br /><br />
                                <a href="http://www.jdheamravati.org.in/" style={{ textDecoration: "none", color: "white" }}>JD Office Amravati</a><br /><br />
                                <a href="http://www.ssesa.org/" style={{ textDecoration: "none", color: "white" }}>Shivaji education Society</a>
                            </ul>
                        </div>
                        <div className="col-md-3 mx-auto mb-4">
                            <h5 className="text-uppercase font-weight-bold" style={{ color: "white" }}>Visitor Counter</h5>
                            <hr className="bg-success mb-4 mt-0 d-inline-block mx-auto" style={{ width: "180px", height: "2px" }} />
                            <ul className="list-unstyled">
                                <img
                                    src="https://hitwebcounter.com/counter/counter.php?page=7740608&style=0006&nbdigits=5&type=ip&initCount=0"
                                    title="Free Counter" Alt="web counter" border="0" />
                                <a href="#" style={{textDecoration: "none", color: "white"}} title="This Website Visits">Visiter Counter</a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-1" style={{border: "5px solid green"}}>
                    <p style={{color:"white"}}>&copy; Copyright 2021
                    shivajicmakola.com
                    </p>
                    <p style={{color:"white"}}>Developed by<a href="#" style={{color:"white", textDecoration:"none"}}> Neel Khandare</a></p>
                </div>
            </footer>
        </div>
    );
};
export default Footer;