import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Navigation extends React.Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>gh-pages-sample</Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem>Introduction</NavItem>
                    <NavItem>Commands</NavItem>
                </Nav>
            </Navbar>
        );
    }
}
