import React from "react";
import Bcom_First_Second_Sem from "/faculty-of-commerce-website/src/pdf/B.com_First_Second_sem.pdf";
import Bcom_Third_Fourth_Sem from "/faculty-of-commerce-website/src/pdf/B.com_Third_Fourth_sem.pdf";
import Bcom_Fifth_Sixth_Sem from "/faculty-of-commerce-website/src/pdf/B.com_Fifth_Sixth_sem.pdf";

const Syllabus = () => {
    return (
        <div>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"></link>
                <div className="container">
                    <a role="button" className="btn btn-outline-primary" href={Bcom_First_Second_Sem}>
                        Bcom_First_Second_Sem
                </a></div><br />
                <div className="container">
                    <a role="button" className="btn btn-outline-primary" href={Bcom_Third_Fourth_Sem}>
                        Bcom_Third_Fourth_Sem
                </a></div><br />
                <div className="container">
                    <a role="button" className="btn btn-outline-primary" href={Bcom_Fifth_Sixth_Sem}>
                        Bcom_Fifth_Sixth_Sem
                </a></div><br />
        </div>
    );
};
export default Syllabus;