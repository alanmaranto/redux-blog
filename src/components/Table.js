import React from "react";
import { connect } from "react-redux";

const Table = ({ users }) => {
    const renderRows = () => {
        return users.map((user) => {
            console.log('users', user)
            return (
                <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.website}</td>
                    <td>
                    </td>
                </tr>
            );
        })
    }
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Enlace</th>
                    </tr>
                </thead>
                <tbody>{renderRows()}</tbody>
            </table>
        </div>
    );
};

const mapStateToProps = state => {
    return state.usersReducers;
  };
  
  export default connect(mapStateToProps)(Table);
