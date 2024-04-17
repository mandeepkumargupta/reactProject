// App.js    http://localhost:3000/
import React from 'react';
import CreateItem from './components/CreateItem';
//import ReadItems from './components/ReadItems';
//import UpdateItem from './components/UpdateItem';
//import DeleteItem from './components/DeleteItem';

function App() {
  return (
    <div>
      <h2 className='custom-h2'>Employee management</h2>
      <CreateItem />
    </div>
  );
}

export default App;

/*
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
