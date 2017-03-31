import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Editor from './containers/Editor';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Editor />
            </Provider>
        );
    }
}

export default App;
