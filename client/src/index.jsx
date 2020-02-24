import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div>Hello World 🔥</div>
        <Routes />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
