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
      monsters: []
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
    return (
      <div className="App">
        <CardList name="Tim">
          {this.state.monsters.map(monster => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
