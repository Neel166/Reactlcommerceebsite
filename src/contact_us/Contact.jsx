import React from "react";

const Contact = () => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous" />
                <meta charset="utf-8" />
            </head>
            <body>
                <div class="card-body">
                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name of Authority</th>
                                <th>Post</th>
                                <th>Email</th>
                                <th>Phon No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Dr. R. M. Bhise</td>
                                <td>Principal</td>
                                <td>principal@shivajiakola.ac.in</td>
                                <td>7972057367</td>
                            </tr>
                            <tr>
                                <td>Mr. Ashok Chandan</td>
                                <td>Registar</td>
                                <td>#</td>
                                <td>9850343332</td>
                            </tr>
                            <tr>
                                <td>Dr. A. M. Raut</td>
                                <td>Coordinator,Faculty of Commerce and Management</td>
                                <td>amraut26@gmail.com</td>
                                <td>9403872151</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </body>
        </html>
    );
};

export default Contact;