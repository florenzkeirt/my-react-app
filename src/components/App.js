import React, { Component } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomersList";
import "./app.css";

class App extends Component {
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
                    <CustomerList />
                </div>
            </div>
        )
    }
}

export default App;