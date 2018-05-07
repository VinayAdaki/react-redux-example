import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Posts from './components/posts';
import PostForm from './components/post-form';

export const App = () => {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
    );
}