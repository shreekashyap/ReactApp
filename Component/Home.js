import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <React.Fragment>
      {/* Main Content */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center">
            {/* Styled Heading Box */}
            <div className="p-4 mb-4 rounded shadow heading-box">
              <h2 className="text-primary">React CRUD using PHP API & MySQL</h2>
              <p className="lead">Follow the steps below to build a complete CRUD application:</p>
              
              {/* Blue Horizontal Line */}
              <hr className="info-line" />
            </div>

            {/* Steps List */}
            <ul className="list-group list-group-flush text-start">
              <li className="list-group-item">✅ Install Node.js and NPM</li>
              <li className="list-group-item">✅ Create a React app</li>
              <li className="list-group-item">✅ Set up routing using <strong>react-router-dom</strong></li>
              <li className="list-group-item">✅ Create <strong>User List, Add User, Edit, Update</strong> components</li>
              <li className="list-group-item">✅ Set up a MySQL database</li>
              <li className="list-group-item">✅ Create PHP APIs for <strong>GET, POST, PUT, DELETE</strong> operations</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .heading-box {
            background-color: #e3f2fd;  /* Light blue background */
            box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2); /* Shadow effect */
          }
          .info-line {
            border: 2px solid #17a2b8;  /* Bootstrap 'info' blue color */
            width: 50%;  /* Adjust width for better styling */
            margin: auto;
          }
        `}
      </style>
    </React.Fragment>
  );
}

export default Home;