import React, { Component } from 'react';
import store from '../redux/store';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import Editor from './Editor';
import WordList from './WordList';

const history = syncHistoryWithStore(browserHistory, store);

class Index extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={Editor} />
                    <Route path="/lipu-nimi" component={WordList} />
                </Router>
            </Provider>
        );
    }
}


export default Index;
