import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Navbar as BSNavbar } from 'react-bootstrap';

const propTypes = {};

class Navbar extends Component {
    render() {
        return (
            <BSNavbar>
                <meta name="theme-color" content="#23c" />
                <BSNavbar.Header>
                    <BSNavbar.Brand>ilo pi sitelen pona</BSNavbar.Brand>
                </BSNavbar.Header>
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
