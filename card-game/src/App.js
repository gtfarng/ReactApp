/*import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
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
}

export default App;
*/

/*
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        Hello World    

        Hello {"World"}  
      </div>
   
    );
  }
}
export default App;
*/
//import React, { Component } from 'react';
import CharacterCard from './CharacterCard';
class App extends Component {
  render() {
    return (
      <div>
        <CharacterCard value="h"/>
        <CharacterCard value="i"/>
      </div>
    );
  }
}
export default App;



