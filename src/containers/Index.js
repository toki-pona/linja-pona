import React, { Component, PropTypes } from 'react';
import store from '../redux/store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Editor from './Editor';
import How from './How';

console.log({browserHistory});
const history = syncHistoryWithStore(browserHistory, store);

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Editor} />
                    <Route path="/how" component={How} />
                </Router>
            </Provider>
        );
    }
}


export default Index;
