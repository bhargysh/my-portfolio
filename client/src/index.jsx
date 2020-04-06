import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Normalize } from "styled-normalize";
import { Routes } from "./routes.jsx";
import { Header } from "./Header.jsx";
import { Footer } from "./Footer.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Normalize />
        <Router>
          <Header />
          <Routes />
          <Footer />
        </Router>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
