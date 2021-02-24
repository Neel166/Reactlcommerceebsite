import React from "react";
import Carousel from '../node_modules/react-bootstrap/Carousel'
import Typed from 'react-typed';
import Newgif from "./img/new.gif";
import Yahoo from "./img/icons8-yahoo-24.png";
import Linkedin from "./img/icons8-linkedin-24.png";
import Instagram from "./img/icons8-instagram-24.png";
import Facebook from "./img/icons8-facebook-26.png";
import Twitter from "./img/icons8-twitter-24.png";
import img1 from "./img/20200111_130903.jpg";
import img2 from "./img/20200107_085327.jpg";
import img3 from "./img/20200125_102230.jpg";
import Sessa from "./img/ssesa.jpg";
import Panjabrao from "./img/panjabrao.jpg";
import MenuBaricon from "./img/icons8-menu-24.png";
import Deleteicon from "./img/icons8-delete-24.png";
import AnilRautSir from './Profile pdf/DrAnilMarotraoRautProfil (1).pdf';
import TidkeSir from './Profile pdf/Updated Profile of Tidke Sir (1).pdf';
import Khekalesir from './Profile pdf/gmk pro (1).pdf';
import NichitMadam from './Profile pdf/savita nichit.pdf';
import ShegokarMadam from './Profile pdf/SMS.pdf';
import PhotoGallery from './pdf/Photo Gallery 2018-19.pdf';
import "./style.css";
import "./ToogleMenu";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
            <title>Commerce</title>
            <nav>
                <div className="wrapper">
                    <div className="logo"><NavLink title="This Website of commerce" to="/">Commerce</NavLink></div>
                    <input type="radio" name="slider" id="menu-btn"></input>
                    <input type="radio" name="slider" id="close-btn"></input>
                    <ul className="nav-links">
                        <label htmlFor="close-btn" className="btn close-btn"><img src={Deleteicon} alt="close" /></label>
                        <li><NavLink className="active" to="/">Home</NavLink></li>
                        <li className="sub-menu">
                            <NavLink className="desktop-item" to="#">About</NavLink>
                            <input type="checkbox" id="showDrop"></input>
                            <label htmlFor="showDrop" className="mobile-item">About</label>
                            <ul className="drop-menu">
                                <li><NavLink to="/mission_vision">mission & vision</NavLink></li>
                                <li><NavLink to="/about_college">About_college</NavLink></li>
                                <li><NavLink to="/commerce">commerce</NavLink></li>
                                <li><NavLink to="/our_pateron">Our pateron</NavLink></li>
                            </ul>
                        </li>
                        <li className="sub-menu">
                            <NavLink className="desktop-item" to="#">Profile</NavLink>
                            <input type="checkbox" id="showDrop1"></input>
                            <label htmlFor="showDrop1" className="mobile-item">Profile</label>
                            <ul className="drop-menu">
                                <li><NavLink target="_blank" to={AnilRautSir}>Dr. A. M. Raut</NavLink></li>
                                <li><NavLink to="#">Dr.U. N. Medshikar</NavLink></li>
                                <li><NavLink target="_blank" to={TidkeSir}>Dr.S. J. Tidke</NavLink></li>
                                <li><NavLink target="_blank" to={Khekalesir}>Dr.G. M. Khekale</NavLink></li>
                                <li><NavLink target="_blank" to={NichitMadam}>Dr.S. V. Nichit</NavLink></li>
                                <li><NavLink target="_blank" to={ShegokarMadam}>Ms. S. M. Shegokar</NavLink></li>
                                <li><NavLink to="#">Dr H.D.Mor</NavLink></li>
                                <li><NavLink to="#">D.r M.Patil</NavLink></li>
                            </ul>
                        </li>
                        <li>
                            <NavLink className="desktop-item" to="#">Activities</NavLink>
                            <input type="checkbox" id="showMega"></input>
                            <label htmlFor="showMega" className="mobile-item">Mega Menu</label>
                            <div className="mega-box">
                                <div className="content">
                                    <div className="row">
                                        <img src={Sessa} alt="Sanstha" />
                                    </div>
                                    <div className="row">
                                        <header>Learning Program</header>
                                        <ul className="mega-links">
                                            <li><NavLink to="/B_com">B_Com</NavLink></li>
                                            <li><NavLink to="/M_com">M_Com</NavLink></li>
                                            <li><NavLink to="/Cop_in_Stock_Marketing">COP in Stock Marketing</NavLink></li>
                                            <li><NavLink to="/cop_in_Ecommerce">COP in Ecommerce</NavLink></li>
                                            <li><NavLink to="/cop_in_Insurance">COP in Insurance</NavLink></li>
                                            <li><NavLink to="/cop_in_Tally">COP in Tally</NavLink></li>
                                            <li><NavLink to="/cop_in_DTP">COP in DTP</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Student Facalities</header>
                                        <ul className="mega-links">
                                            <li><a target="_blank" href="https://rrdotjnb9hwxzobgyrxdvg-on.drv.tw/quiz%20app/">Quiz</a></li>
                                            <li><NavLink to="/chatbot">ChatBot_for_queries</NavLink></li>
                                            <li><a target="_blank" href="https://chatappmadebyneel.000webhostapp.com/">Chat with teacher</a></li>
                                            <li><NavLink to="/student_activities">Student Activities</NavLink></li>
                                            <li><NavLink to="#">Mobile Email</NavLink></li>
                                            <li><NavLink to="#">Web Marketing</NavLink></li>
                                        </ul>
                                    </div>
                                    <div className="row">
                                        <header>Department Activities</header>
                                        <ul className="mega-links">
                                            <li><NavLink to="/academic-calender">Academic Calender</NavLink></li>
                                            <li><NavLink to="#">Academic Activities</NavLink></li>
                                            <li><NavLink to="#">Study Tours</NavLink></li>
                                            <li><NavLink to="#">Quiz Competition</NavLink></li>
                                            <li><NavLink to="#">Bridge Course</NavLink></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="sub-menu">
                            <NavLink to="#">Exam and scholarship</NavLink>
                            <input type="checkbox" id="showDrop2" />
                            <label htmlFor="showDrop2" className="mobile-item">Exam section</label>
                            <ul className="drop-menu">

                            </ul>
                        </li>
                        <li><NavLink to="/research">Research</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                        <li className="sub-menu">
                            <NavLink to="/">Gallery</NavLink>
                            <input type="checkbox" id="showDrop3" />
                            <label htmlFor="showDrop3" className="mobile-item">Gallery</label>
                            <ul className="drop-menu">
                                <li><NavLink target="_blank" to={PhotoGallery}>Photo Gallery</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                    <label htmlFor="menu-btn" className="btn menu-btn"><img src={MenuBaricon} alt="menu-btn" /></label>
                </div>
            </nav><br /><br />
            <div className="jumbotron text-center">
                <div>
                    <img src={Sessa} alt="" className="img-fluid rounded-circle float-left" width="105" height="75" />
                    <img src={Panjabrao} alt="" className="img-fluid rounded-circle float-right" width="105" height="75" />
                </div>
                <h6> Shri Shivaji Education Society, Amravati </h6>
                <h4>SHRI SHIVAJI COLLEGE OF ARTS, COMMERCE AND SCIENCE, AKOLA</h4>
                <p>Reaccredited with "A" grade with CGPA 3.24 * UGC status(College with potential for Excellence)</p>
                <h3> Faculty of Commerce & Management</h3>
                <h5><Typed
                    strings={[
                        "Welcome to Faculty", "Learn Commerce", "Computer Application in Business", "Accounting", "Marketing", "Taxation", "Economics", "and other awesome Learning Experiences with us :)"
                    ]}
                    typeSpeed={25}
                    smartBackspace={true}
                    backDelay={1200}
                    startDelay={1000}
                    loop={true}
                />
                </h5>
                <marquee> "Skilled Manpower is the asset of nation, our faculty works to built it"</marquee>
            </div>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={img2}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
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
                                        title="Free Counter" alt="web counter" border="0" />
                                    <a href="#" style={{ textDecoration: "none", color: "white" }} title="This Website Visits">Visiter Counter</a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright text-center py-1" style={{ border: "5px solid green" }}>
                        <p style={{ color: "white" }}>&copy; Copyright 2021
                        shivajicmakola.com
                    </p>
                        <p style={{ color: "white" }}>Developed by<a target="_blank" href="http://icodern.herokuapp.com/" style={{ color: "white", textDecoration: "none" }}> Neel Khandare</a></p>
                    </div>
                </footer>
            </div>
            <script src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        </div>
    );
};
export default Home;