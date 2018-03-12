import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/font-awesome/css/font-awesome.min.css';
import '../../node_modules/mdbreact/docs/css/mdb.min.css';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }
    
    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }
    
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    
    render() {
        return (
            <Router>
                <Navbar sticky="top" color="green" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                    <strong>ALTHAQALAYN</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav className="ml-auto">
                        <NavItem active>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                       
                        <NavItem className="align-items-end">
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>Menu</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="#">Action</DropdownItem>
                                <DropdownItem href="#">Another Action</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                                <DropdownItem href="#">Something else here</DropdownItem>
                            </DropdownMenu>
                            </Dropdown>
                        </NavItem>
                         <NavLink className="nav-link" to="/Login"><Link to="/Login" ><i className="fa fa-user-circle">   Login  </i> </Link></NavLink>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default Navigation;