import React from "react";

const our_pateron = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
            </head>
            <body>
                <div className="container">
                    <h1 style={{color:"blue"}}> <u>Executive View</u></h1>
                    <p className="lead" style={{color:"blue"}}><i>Executive view of President, Principal and Head, Department of computer Science.</i></p>
                    <div className="row">
                        <div className="col-sm-3" id="myScrollspy">
                            <div className="list-group">
                                <a className="list-group-item list-group-item-action active" href="#section1">President Column</a>
                                <a className="list-group-item list-group-item-action" href="#section2">Principal Column</a>
                                <a className="list-group-item list-group-item-action" href="#section3">HOD Column</a>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div id="section1">
                                <h2 style={{color:"blue"}}>SHRI. SHIVAJI EDUCATION SOCIETY, AMRAVATI</h2>
                                <img className="img-fluid rounded-circle" src="photo/president.gif" alt="Chania" width="260" height="145" />
                                <h5 style={{color:"blue"}}>Hon. Shri Harshavardhan Deshmukh - President, Shri. Shivaji Education society, Amravati </h5>
                                <p style={{textAlign:"justify"}}>The society started its work in 1931 through Shri. Shivaji Marathi HighSchool. It's aimed at education and upbringing the poor rural students who were far away from the filed of education. The Society succeeded tremendously in its aim and to-day we have we have educational institutes at cities as well as in interior areas, offering courses in Agriculture, Commerce, Arts, Education, Engineering, Fine Arts, Law, Management, medicine, Physical Education, Science & Information Technology. Shri Shivaji Education Scociety is the biggest Education Society in the Central India, running Colleges and Training Centers, Schools and Kindergraterns, Hostels, numerous workshops, entension services, printing press, Gymnasia, Health clubs and a host of other facilities totaling about 132 in the servicesof the community at large, along with a 150 bed Hospital and a Medical Research Center. Our Society's services is rewarded for its distinguished work and devotion. In the year 1993-94. In the year 1999-2000, the Society              was awarded the Gadge Maharaj Memorial Award. On 5th Sept. 2000. The Govt. of Maharashtra declared Shri. Shivaji Education Society as the best administered Society in the State and best owned upon it a cash reward of Rs. 1 Lac. Society's contribution in the field of education and cultural advancement has been duly recognized by the Govt. of Maharashtra from time to time.</p>

                            </div>
                            <hr />
                            <div id="section2">
                                <h2 style={{color:"blue"}}>SHRI SHIVAJI COLLEGE OF ARTS, COMMERCE & SCIENCE, AKOLA</h2>
                                <img className="img-fluid rounded-circle" src="photo/principal.png" alt="Chania" width="260" height="145" />
                                <h6 style={{color:"blue"}}>Dr. Rameshvar M. Bhise  - Principal </h6>
                                <p style={{textAlign: "justify"}}>Shri Shivaji College of Arts & Commerce was established in 1963 under the sincere guidance of a great visionary, academician and social reformitst, Dr. Abasaheb Khedkar, the rural development minister of the Govt. Maharashtra. It was imparting only formal education in the faculty of Arts and Commerce. But considering the importance of science and technology, the faculty of science was started in 1967. Since then our college has been giving education in the faculty of Arts, Commerce, Science and Home Science from junior College, MCVC, to Graduation, Post Graducation and Doctoral Research Programmes, it has competant staff in teaching department, well equipped recognized research laboratories, a computer department, rich central and departmental libraries supported by specious reading rooms, beautiful campus, hostel, well developed Botanical garden and a vast playground. It always attempts to provide quality education to the students who are coming from all walks of life. Today it is the premier and multi-faculty educational center affiliated to Sant Gadge Bab Amravati University, Amravati. The progress graph is continuously rising with its students occupying distinguished positions in almost all th efilds. In Nov. 2003, the college has been accredited with "B+" grade by NAAC, Banglore.</p>
                            </div>
                            <hr />
                            <div id="section3">
                                <h2 style={{color:"blue"}}>DEPARTMENT OF COMPUTER SCIENCE & IT</h2>
                                <img className="img-fluid rounded-circle" src="photo/vmpatil.jpg" alt="Chania" width="260" height="135" />
                                <h6 style={{color:"blue"}}>Dr. Vinod M. Patil - HOD </h6>
                                <p style={{textAlign:"justify"}}>The department of Computer Science established in the year 1986. It is the oldest department in the
                                State of Maharashtra and topmost in the SGB Amravati University area. Firstly, undergraduate course
                                was started then post graduate course was added in the year 2007. Keeping pace with the changing
                                scenario it has introduced in 2005 Certificate / Diploma / Advance Diploma in Information & Computer
                                Technology at undergraduate level under UGC�s Career Oriented Programs. It has sufficient
                                infrastructural facilities available as per need and latest development in the field like computer science and Information Technology. </p>
                            </div>

                            <hr />

                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
};
export default our_pateron;