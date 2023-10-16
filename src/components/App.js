import React, { Component } from "react";
import axios from "axios";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomersList";
import Loader from "./Loader";
import "./app.css";

class App extends Component {
    state = {
        customers: [],
        loader: false,
        url: "http://localhost:8000/api/v1/customers"
    };
    
    getCustomers = async() => {
        this.setState({ loader: true });
        const token = "1|bZgl63C4Zjkd70LpautGSX51FLjtkEJwX3ZXyOaY67b77ccb";

        try {
            const response = await axios.get(this.state.url, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            this.setState({ customers: response.data.data, loader: false }); // Used response.data.data because the API result is not entirely JSON
        } catch (error) {
            console.error("Error fetching data:", error);
            this.setState({ loader: false });
        }
    };

    componentDidMount() {
        this.getCustomers();
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
                    <CustomerForm />
                    {
                        this.state.loader ? <Loader /> : ""
                    }
                    <CustomerList customers = { this.state.customers } />
                </div>
            </div>
        )
    }
}

export default App;