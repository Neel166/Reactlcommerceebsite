import React from "react";
import "../css/error.css";

const Error = () => {
    return (
        <div id="container">
            <div className="content">
                <h2>404</h2>
                <h4>oops! Page Not Found this website</h4>
                <p>The page you were looking for doesn't exists. You May have mistyped the address or the page may moved</p>
                <a href="javascript:location.reload();">Reload Page</a> 
                <a href="javascript:history.back();">Back to prevsious Page</a>
            </div>
        </div>
    );
};
export default Error;