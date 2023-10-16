import React, { Component } from "react";

class CustomerForm extends Component {
    state = {
        form: { name: '', type: '', email: '', address: '', city: '', state: '', postalCode: '', isEdit: false },
        btnName: "Save",
        btnClass: "ui primary button submit-button"
    };

    isEmpty(obj) {
        return Object.entries(obj).length === 0 && obj.constructor === Object;
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props && !this.isEmpty(this.props.customer)) {
            //console.log("Update");
            this.setState({
                form: { ...this.props.customer, isEdit: true },
                btnName: "Update",
                btnClass: "ui orange button submit-button"
            });
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        let form = this.state.form;
        form[name] = value;
        this.setState({ form });
    };

    onFormSubmit = event => {
        //prevent form submit
        event.preventDefault();

        //form validation
        if (this.formValidation()) {
            //send form data to app
            this.props.onFormSubmit(this.state.form);
        }

        //clear form fields
        this.clearFormFields();
    };

    formValidation = () => {
        // name
        if (document.getElementsByName("name")[0].value === '') {
            alert('Enter customer name');
            return false;
        }
        return true;
    };

    clearFormFields = () => {
        // change form state
        this.setState({
            form: { name: '', type: '', email: '', address: '', city: '', state: '', postalCode: '', isEdit: false }
        });

        // change the button to save
        this.setState({
            btnName: "Save",
            btnClass: "ui primary button submit-button"
        });

        // clear form fields
        document.querySelector(".form").reset();
    };

    render() {
        return (
            <form className="ui form customer-form">
                <div className="fields">
                    <div className="four wide field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Customer Name" value={this.state.form.name} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>Type</label>
                        <input type="text" name="type" placeholder="Customer Type [I or B]" value={this.state.form.type} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="sample@email.com" value={this.state.form.email} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>Address</label>
                        <input type="text" name="address" placeholder="Full Address" value={this.state.form.address} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>City</label>
                        <input type="text" name="city" placeholder="City" value={this.state.form.city} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>State</label>
                        <input type="text" name="state" placeholder="State" value={this.state.form.state} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <label>Postal Code</label>
                        <input type="text" name="postalCode" placeholder="Postal Code" value={this.state.form.postalCode} onChange={this.handleChange} />
                    </div>
                    <div className="four wide field">
                        <button className={this.state.btnClass} onClick={this.onFormSubmit}>{this.state.btnName}</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default CustomerForm;