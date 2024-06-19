import React, { Component } from "react";
import Navbar from 'react-bootstrap/Navbar';

class TopBar extends Component {
    render() {
        return (
        <div>
            <Navbar className="top-bar"
                    style={{ background:"lightgray"}}>
                <Navbar.Brand href="#home"
                              style={{color: "green"}}>
                    Home
                </Navbar.Brand>
                <Navbar.Brand href="#home"
                              style={{color: "green"}}>
                    Pricing?
                </Navbar.Brand>
                <Navbar.Brand href="#home"
                              style={{color: "green"}}>
                    HellO?
                </Navbar.Brand>
            </Navbar >
            <br/>
        </div>
        );
    }
}  

export default TopBar;