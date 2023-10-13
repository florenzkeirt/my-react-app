import React, { Component } from "react";

class CustomerForm extends Component {
    render() {
        return (
            <form className="ui form customer-form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Customer Name" />
                    </div>
                    <div className="four wide field">
                        <label>Type</label>
                        <input type="text" name="type" placeholder="Customer Type [I or B]" />
                    </div>
                    <div className="four wide field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="sample@email.com" />
                    </div>
                    <div className="four wide field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Full Address" />
                    </div>
                    <div className="four wide field">
                        <label>City</label>
                        <input type="text" name="city" placeholder="City" />
                    </div>
                    <div className="four wide field">
                        <label>State</label>
                        <input type="text" name="state" placeholder="State" />
                    </div>
                    <div className="four wide field">
                        <label>Postal Code</label>
                        <input type="text" name="postal_code" placeholder="Postal Code" />
                    </div>
                    <div className="four wide field">
                        <button className="ui primary button submit-button">Save</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CustomerForm;