import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AuthService from "./components/AuthService";
import withAuth from "./components/withAuth";
const Auth = new AuthService();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  handleLogout() {
    Auth.logout();
    this.props.history.push("/login");
  }
  getName = () => {
   /*  axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      console.log("responsedata", res.data);
    });
    */
    const name = Auth.getName().then((res) => {
      console.log('response',res);
    });
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome {this.props.user.sub}</h2>
          <h2>Name {this.state.name}</h2>
        </div>
        <p className="App-intro">
          <button
            type="button"
            className="form-submit"
            onClick={this.handleLogout.bind(this)}
          >
            Logout
          </button>
          <button
            type="button"
            className="form-submit"
            onClick={this.getName.bind(this)}
          >
            GetName
          </button>
        </p>
      </div>
    );
  }
}

export default withAuth(App);
