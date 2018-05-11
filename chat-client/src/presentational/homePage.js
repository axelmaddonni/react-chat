import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import {connect} from "react-redux";
import { Link } from 'react-router-dom';
import {Agenda} from "../smart/agenda"

class HomePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h5>Welcome to ReactChat { sessionStorage.getItem('user').nick }</h5>
                </header>
                <Link to="/login">Logout</Link>
                <Agenda/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

const connected = connect(mapStateToProps)(HomePage);
export { connected as HomePage }