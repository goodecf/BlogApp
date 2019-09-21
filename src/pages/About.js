import React from "react";

const About = () => {
  return (
    <div className="container text-left">
      <h1>About</h1>
      <h2>This app was made with the following:</h2>
      <ul>
        <li>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ReactTraining/react-router"
            target="_blank"
            rel="noopener noreferrer"
          >
            React-router
          </a>
        </li>
        <li>
          <a
            href="https://www.npmjs.com/package/uuidv4"
            target="_blank"
            rel="noopener noreferrer"
          >
            Uuidv4
          </a>
        </li>
        <li>
          <a
            href="https://github.com/axios/axios/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Axios
          </a>
        </li>
        <li>
          <a
            href="https://github.com/typicode/json-server"
            target="_blank"
            rel="noopener noreferrer"
          >
            JSON Server
          </a>
        </li>
      </ul>
    </div>
  );
};

export default About;
