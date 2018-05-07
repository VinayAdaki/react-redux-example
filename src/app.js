import React from 'react';
import logo from './logo.svg';
import './app.css';
import { Provider } from 'react-redux';

import Posts from './components/posts';
import Postform from './components/post-form';

import store from './store';

export const App = () => {
        return (
            <Provider store={store}>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <Postform />
                    <hr />
                    <Posts />
                </div>
            </Provider>
        );
}
