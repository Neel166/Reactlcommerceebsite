import React from "react";
import Mcom_First_Fourth_Sem from "/faculty-of-commerce-website/src/pdf/M.com_First_to_Fourth_sem.pdf";
import Mcom_Fourth_Sem from "/faculty-of-commerce-website/src/pdf/M.com_Fourth_Sem.pdf";


const Syllabus = () => {
    return (
        <div>
            <meta charset="UTF-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link><br/><br/>
            <div className="container">
                <a role="button" className="btn btn-outline-primary" href={Mcom_First_Fourth_Sem}>
                    Bcom_First_Second_Sem
                </a></div><br/>
            <div className="container">
                <a role="button" className="btn btn-outline-primary" href={Mcom_Fourth_Sem}>
                    Bcom_Third_Fourth_Sem
                </a></div>
        </div>
    );
};
export default Syllabus;