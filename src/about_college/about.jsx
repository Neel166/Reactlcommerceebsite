import React from "react";
import College from "../img/p19.jpg";

const About = () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
            <div className="Container">
                <div class="container">
                    <h2>About College</h2>
                    <p style={{width:"1100px"}}>Shri Shivaji College of Arts & Commerce was established in 1963 under the sincere guidance of a great visionary, academician and social reformitst, Dr. Abasaheb Khedkar, the rural development minister of the Govt. Maharashtra. It was imparting only formal education in the faculty of Arts and Commerce. But considering the importance of science and technology, the faculty of science was started in 1967. Since then our college has been giving education in the faculty of Arts, Commerce, Science and Home Science from junior College, MCVC, to Graduation, Post Graducation and Doctoral Research Programmes, it has competant staff in teaching department, well equipped recognized research laboratories, a computer department, rich central and departmental libraries supported by specious reading rooms, beautiful campus, hostel, well developed Botanical garden and a vast playground. It always attempts to provide quality education to the students who are coming from all walks of life. Today it is the premier and multi-faculty educational center affiliated to Sant Gadge Bab Amravati University, Amravati. The progress graph is continuously rising with its students occupying distinguished positions in almost all th efilds. In Nov. 2003, the college has been accredited with "B+" grade by NAAC, Banglore.</p>
                    <div class="card" style={{width: "1100px"}}>
                        <img class="card-img-top" src={College} alt="Card image" style={{width: "100%"}} />
                        <div class="card-body">

                            <h2 >College At A Glance:</h2>

                            <ol>
                                <li>Competent Teaching Staff</li>
                                <li>Recognized Research Laboratories.</li>
                                <li>Broadband Internet Facility in all Departments.</li>
                                <li>Teacher's and Staff Sponsored Awards and Prizes. </li>
                                <li>Geology, Biochemisty and Microbiology Consultancy. </li>
                                <li>Departmetnal Academic and Cultural Associations. </li>
                                <li>Remedial Classes for S.T./s.C. Students & Minorities. </li>
                                <li>Poor Boys Relief Fund. </li>
                                <li>Campus Interviews. </li>
                                <li>Earn and Learn Scheme. </li>
                                <li>Teacher Guardain Scheme. </li>
                                <li>OPD Consultancy. </li>
                            </ol>

                            <h2>Future Plans </h2>
                            <ul>
                                <li>Competitive Examination Classes.</li>
                                <li>NET/SET Coaching classes in Life Science and other subjects.</li>
                                <li>Inspired by the Ideals of Late Dr. Panjabrao Alias Bhausaheb Deshmukh and Under the able guidence of our President Competent teaching Staff with efficient Non - Teaching and Laboratory Staff devotedly discharge their duties under visionary Principal Dr. R. M. Bhise, an efficient administrator & renowned academician. </li>
                            </ul>
                            <a href="#" class="btn btn-primary">See Profile</a>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </div>
    );
};
export default About;
