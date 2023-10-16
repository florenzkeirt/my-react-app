import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    render() {
        const customers = this.props.customers;

        return (
            <div className="data">
                <table className="ui celled table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>City</th>
                            <th>State</th>
                            <th>Postal Code</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map(customer => {
                                return <Customer customer={customer} key={customer.id} />;
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerList;