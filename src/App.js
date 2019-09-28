import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload !!! Hello
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // We can use this because we are utilizing "Component" class
  componentDidMount() {
    // This will dynamically fetch the json from this website
    // Convert to JS Object and store it monsters object above
    // So we can render it to the page using the DOM
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    /*
     - Notice here we created a component called "CardList"
     - Placed all our json valus there by rendering it ina 4x4 format defined by the CSS
     - For the input field, this is how you add to the state
     - SetState is a async call
     - IF THERE IS SOMETHIGN YOU WANT TO DO RIGHT AFTER SET STATE, then you can pass in a second
       parameter to do it: 
       Ex. onChange={e => this.setState({searchField: e.target.value}, () => console.log(this.state))}
    */
    return (
      <div className="App">
        <input 
          type="searh" 
          placeholder="search monster" 
          onChange={e => this.setState({searchField: e.target.value})}/>
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
