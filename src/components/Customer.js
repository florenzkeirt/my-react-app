import React, { Component } from "react";

class Customer extends Component {
    render() {
        return (
            <tr>
                <td>231</td>
                <td>Florenz Test2 Cuizon</td>
                <td>I</td>
                <td>florenz@test2.com</td>
                <td>123 Test2 Address</td>
                <td>Test2 City</td>
                <td>Test2 State</td>
                <td>222222</td>
                <td>
                    <button className="mini ui blue button">Edit</button>
                </td>
            </tr>
        );
    }
}

export default Customer;