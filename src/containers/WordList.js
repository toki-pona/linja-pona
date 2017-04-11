import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import { getWordsList } from '../utils/linja-pona-parser';
import Navbar from './Navbar';

const propTypes = {};

const Item = ({ value: { key, code } }) => (
    <Col lg={1} sm={2} xs={4} className="text-center" style={{ height: 68 }}>
        <div className="font-linja-pona font-size-big">{String.fromCharCode(code)}</div>
        <div>{key}</div>
    </Col>
);

class WordList extends Component {
    render() {
        const words = getWordsList();

        return (
            <div className="container-responsive">
                <Navbar />
                <Row>
                    {words.map(item => <Item value={item} key={item.key} />)}
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

WordList.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(WordList);
