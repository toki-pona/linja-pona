import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as editorActions, constants as editorConstants } from '../redux/modules/Editor';
import { stringToLP } from '../utils/linja-pona-parser';
import { Well, Col, FormGroup, ControlLabel, FormControl, Button, Glyphicon } from 'react-bootstrap';
import Navbar from './Navbar';
import cx from 'classnames';

const propTypes = {};

class Editor extends Component {
    handleChange(e) {
        const { props: { editorChange } } = this;
        editorChange(e.target.value);
    }

    render() {
        const { props: { editorInput, editorAlign, editorAlignLeft, editorAlignCenter }, handleChange } = this;
        const isAlignLeft = editorAlign === editorConstants.ALIGN_LEFT;
        const isAlignCenter = editorAlign === editorConstants.ALIGN_CENTER;

        return (
            <div>
                <Navbar />
                <div className="container-responsive">
                    <Col xs={12} sm={6} className="pull-right">
                        <ControlLabel>o lukin:</ControlLabel>
                        <Well
                            bsSize="small"
                            className={
                                cx('font-linja-pona font-size-big', {
                                    alignLeft: isAlignLeft,
                                    alignCenter: isAlignCenter
                                })
                            }
                        >
                            {stringToLP(editorInput)}
                        </Well>
                        <FormGroup>
                            <Button bsStyle="primary" onClick={editorAlignLeft} className={cx({ active: isAlignLeft })}>
                                <Glyphicon glyph="align-left" />
                            </Button>
                            {' '}
                            <Button
                                bsStyle="primary"
                                onClick={editorAlignCenter}
                                className={cx({ active: isAlignCenter })}
                            >
                                <Glyphicon glyph="align-center" />
                            </Button>
                            {' '}
                            <Button bsStyle="primary" className="pull-right">kama jo e sitelen</Button>
                        </FormGroup>
                    </Col>
                    <Col xs={12} sm={6}>
                        <FormGroup>
                            <ControlLabel>o sitelen:</ControlLabel>
                            <FormControl
                                componentClass="textarea"
                                onChange={handleChange.bind(this)}
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
    return { editorInput: state.editor.input, editorAlign: state.editor.align };
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {
            editorChange: editorActions.editorChange,
            editorAlignLeft: editorActions.editorAlignLeft,
            editorAlignCenter: editorActions.editorAlignCenter
        },
        dispatch
    );
};

Editor.propTypes = propTypes;
export default connect(mapStateToProps, mapDispatchToProps)(Editor);
