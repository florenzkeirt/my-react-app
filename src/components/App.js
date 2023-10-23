import React, { Component } from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomersList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
    state = {
        customers: [],
        customer: {},
        loader: false,
        token: "1|bZgl63C4Zjkd70LpautGSX51FLjtkEJwX3ZXyOaY67b77ccb",
        getUrl: "http://laravel-api.local/api/v1/customers",
        createUrl: "http://laravel-api.local/api/v1/customers",
        editUrl: "http://laravel-api.local/api/v1/customers"
    };
    
    getCustomers = async() => {
        this.setState({ loader: true });

        try {
            const response = await axios.get(this.state.getUrl, {
                headers: {
                    Authorization: `Bearer ${this.state.token}`,
                }
            });
            this.setState({ customers: response.data.data, loader: false }); // Used response.data.data because the API result is not entirely JSON
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loader: false });
        }
    };

    onEdit = data => {
        //console.log("app ", data);
        this.setState({ customer: data });
    };

    createCustomer = async (data) => {
        this.setState({ loader: true })

        await axios.post(this.state.createUrl, {
            // Your JSON data goes here
            name: data.name,
            type: data.type,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode
        }, 
        {
            headers: {
                Authorization: `Bearer ${this.state.token}`,
            }
        });

        this.getCustomers();
    };

    editCustomer = async (data) => {
        // clear customer obj
        this.setState({ customer: {}, loader: true });

        await axios.patch(`${this.state.editUrl}/${data.id}`, {
            // Your JSON data goes here
            name: data.name,
            type: data.type,
            email: data.email,
            address: data.address,
            city: data.city,
            state: data.state,
            postalCode: data.postalCode
        }, 
        {
            headers: {
                Authorization: `Bearer ${this.state.token}`,
            }
        });

        this.getCustomers();
    };

    componentDidMount() {
        this.getCustomers();
    };

    onFormSubmit = data => {
        if (data.isEdit) {
            // if is edit true
            this.editCustomer(data);
        } else {
            // if edit false
            this.createCustomer(data);
        }
    };

    render() {
        return(
            <div>
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                        <a href="/#" className="header item">
                            React JS CRUD with Laravel API
                        </a>
                    </div>
                </div>
                <div className="ui main-container">
                    <CustomerForm customer={this.state.customer} onFormSubmit={this.onFormSubmit} />
                    {
                        this.state.loader ? <Loader /> : ""
                    }
                    <CustomerList 
                        customers = { this.state.customers } 
                        onEdit = {this.onEdit}
                    />
                </div>
            </div>
        )
    }
}

export default App;