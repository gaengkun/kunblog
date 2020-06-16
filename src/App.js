import axios from "axios";
import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: "gaengkun",
      test: ""
    };
  }

  componentDidMount() {
    this._dbTest();
  }

  _dbTest = async () => {
    const res = await axios.get("/api/test");
    console.log(res.data);
  };

  render() {
    return (
      <div className="App">
        <h3>
          {" "}
          Welcome to <u> {this.state.host} </u> Blog!{" "}
        </h3>
      </div>
    );
  }
}

export default App;
