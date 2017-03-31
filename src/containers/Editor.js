import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as editorActions } from '../redux/modules/Editor';
import { stringToLP } from '../utils/linja-pona-parser';
import {Well, Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

const propTypes = {};

class Editor extends Component {
    handleChange(e) {
        const { props: { editorChange } } = this;
        editorChange(e.target.value);
    }

    render() {
        const { props: { editorInput } } = this;

        return (
            <div className="container">

                <Col xs={12} sm={6}>
                    <FormGroup>
                        <ControlLabel>o sitelen:</ControlLabel>
                        <FormControl componentClass="textarea" onChange={this.handleChange.bind(this)} value={editorInput} />
                    </FormGroup>
                </Col>
                <Col xs={12} sm={6}>
                    <ControlLabel>o lukin:</ControlLabel>
                    <Well bsSize="small" className="font-linja-pona font-size-big">{stringToLP(editorInput)}</Well>
                </Col>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        editorInput: state.editor.input
    };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            editorChange: editorActions.editorChange
        },
        dispatch
    );
};

Editor.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
