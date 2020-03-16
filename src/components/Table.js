import React from "react";

const Table = () => {
    const renderRows = () => (
        <tr>
            <td>Aqui va un nombre</td>
            <td>Aqui va un email</td>
            <td>Aqui va tu enlace</td>
            <td>
            </td>
        </tr>
    );
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

export default Table;
