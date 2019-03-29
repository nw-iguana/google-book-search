import React, { Component } from 'react';
import './App.css';
import BookApp from './google-book/book-app/BookApp';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BookApp />
      </div>
    );
  }
}

export default App;
