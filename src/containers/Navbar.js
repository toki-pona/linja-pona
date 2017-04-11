import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar as BSNavbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router';

const propTypes = {};

const LinkNav = props => <li><Link {...props} /></li>;

class Navbar extends Component {
    render() {
        return (
            <BSNavbar fluid={true}>
                <meta name="theme-color" content="#23c" />

                <BSNavbar.Toggle />

                <BSNavbar.Header className="logo-wrapper">
                    <BSNavbar.Brand className="logo" />
                </BSNavbar.Header>

                <BSNavbar.Collapse>
                    <Nav>
                        <LinkNav to="/">Home</LinkNav>
                        <LinkNav to="/lipu-nimi">Words List</LinkNav>
                    </Nav>
                </BSNavbar.Collapse>

            </BSNavbar>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

Navbar.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
