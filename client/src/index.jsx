import React from "react";
import ReactDOM from "react-dom";
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
        <Header />
        <Routes />
        <Footer />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
