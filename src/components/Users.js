import React, { Component } from "react";
import Table from "./Table";

class Users extends Component {

  renderContent = () => {
    return <Table />;
  };

  render() {
    return (
      <div>
        <h1>Users</h1>
        <div>{this.renderContent()}</div>
      </div>
    );
  }
}

export default Users;
