import React, { Component } from "react";

class Customer extends Component {
    onEdit = () => {
        this.props.onEdit(this.props.customer);
    };

    render() {
        const {id, name, type, email, address, city, state, postalCode} = this.props.customer || {};

        return (
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>{city}</td>
                <td>{state}</td>
                <td>{postalCode}</td>
                <td>
                    <button className="mini ui blue button" onClick={this.onEdit}>Edit</button>
                </td>
            </tr>
        );
    }
}

export default Customer;