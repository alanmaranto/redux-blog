import React, { Component } from "react";
import { connect } from "react-redux";

import * as usersActions from "../redux/actions/usersActions";
import Loading from "./Loading";
import Error from "./Error";
import Table from "./Table";

class Users extends Component {
    componentDidMount() {
        const { users } = this.props;
        console.log('users', users)
        if (!users.length) {
            this.props.fetchAllUsers();
        }
    }

    renderContent = () => {
        const { loading, error } = this.props;

        if (loading) {
            return <Loading />;
        }

        if (error) {
            return <Error message={error} />;
        }
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

const mapStateToProps = state => {
    return state.usersReducers;
};

export default connect(mapStateToProps, usersActions)(Users);
