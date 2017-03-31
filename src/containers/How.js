import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

const propTypes = {};

class How extends Component {
    render() {
        return (
            <div className="container">
                <Row>
                    <Col xs={12}><Link to="/">Back</Link></Col>
                    <Col xs={12}>list</Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};
const mapDispatchToProps = dispatch => {
    return {};
};

How.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(How);
