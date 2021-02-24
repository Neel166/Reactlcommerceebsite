import React from "react";
import { NavLink } from "react-router-dom";

const M_com = () => {
  return (
    <>
      <div>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
        <div className="container">
          <h3>Syllabus</h3>
          <NavLink className="btn btn-outline-primary"
            to="/M-com/M_Com_sylabuss/"
            role="button">Syllabus of M. Com </NavLink>
        </div><br /><br />

        <div className="container">
          <h3>Videos by Faculty Members </h3>
          <NavLink className="btn btn-outline-primary"
            to="/M-com/M_Com_videos"
            role="button"
          >Start Watching
            </NavLink>
        </div>
      </div>
    </>
  );
};
export default M_com;