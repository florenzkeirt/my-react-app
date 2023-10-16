import React, { Component } from "react";
import Customer from "./Customer";

class CustomerList extends Component {
    onEdit = data => {
        //console.log("customer on edit ", id);
        this.props.onEdit(data);
    };

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
                                return (
                                    <Customer 
                                        customer={customer} 
                                        key={customer.id} 
                                        onEdit={this.onEdit} 
                                    />
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default CustomerList;