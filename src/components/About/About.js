import React from "react";

import Card from "../Card/Card";

const about = (props) => {
  return (
    <Card>
      <h1>About this project</h1>

      <div style={{ textAlign: "left" }}>
        <p>
          The focus of this project was to learn and put in practise some basic
          concepts about React. As you can see the blog contains dummy content.
        </p>

        <p>
          This project was created by create-react-app CLI. Below you can find
          the concepts used for this project:
        </p>
        <ul>
          <li>Functional and Class Components</li>
          <li>Class Components life cycles</li>
          <li>CSS Modules</li>
          <li>Inline styles</li>
          <li>React Router</li>
          <li>Fetch data from external API with axios</li>
        </ul>

        <p>
          This project is published using Github Pages.{" "}
          <a href="https://praton90.github.io/crl-flexbox-challenge/index.html">
            You can take a look here
          </a>
        </p>

        <p>
          Blog's content is fetched from{" "}
          <a href="https://jsonplaceholder.typicode.com">
            {" "}
            JsonPlaceHolder API
          </a>
        </p>
      </div>
    </Card>
  );
};

export default about;
