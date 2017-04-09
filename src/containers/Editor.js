import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as editorActions } from '../redux/modules/Editor';
import { stringToLP } from '../utils/linja-pona-parser';
import { Well, Col, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import Navbar from './Navbar';

const propTypes = {};

class Editor extends Component {
    handleChange(e) {
        const { props: { editorChange } } = this;
        editorChange(e.target.value);
    }

    render() {
        const { props: { editorInput } } = this;

        return (
            <div>
                <Navbar />
                <div className="container">

                    <Col xs={12} sm={6} className="pull-right">
                        <ControlLabel>o lukin:</ControlLabel>
                        <Well bsSize="small" className="font-linja-pona font-size-big">{stringToLP(editorInput)}</Well>
                        <FormGroup>
                            <Button bsStyle="primary"><Glyphicon glyph="align-left" /></Button>
                            <Button bsStyle="primary"><Glyphicon glyph="align-center" /></Button>
                            <Button bsStyle="primary" className="pull-right">kama jo e sitelen</Button>
                        </FormGroup>

                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup>
                            <ControlLabel>o sitelen:</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                onChange={this.handleChange.bind(this)}
                                value={editorInput}
                            />
                        </FormGroup>
                    </Col>
                </div>
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
