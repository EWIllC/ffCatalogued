// import logo from './logo.svg';
// import './App.css';
import React from "react"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      chest: {},
      level: "",
      slot: "",
    };
    this.sort = this.sort.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  handleSubmit(event) {
    event.preventDefault();
    let { level, slot } = this.state;

    slot = slot.toLocaleUpperCase() + ", ";


    if(!this.state.chest[level]) {
      console.log("hit")
      this.setState({
        chest: {...this.state.chest, [level]: {level: [level], peices: [slot]}}
      })
    }
    if(this.state.chest[level]) {
      this.setState({
        chest: {...this.state.chest, [level]: {level: [level], peices: [...this.state.chest[level].peices, slot]}}
      })
    }
  };

  sort() {
    
  };

  render () {

    const { chest } = this.state;
    return (
      <div>

  
        <form onSubmit={this.handleSubmit}>
          <h4>Level:</h4>
          <input
            className="entryForm"
            type="text"
            name="level"
            value={this.state.level}
            onChange={this.handleChange}
          />

          <h4>Slot:</h4>
          <input
            className="entryForm"
            type="text"
            name="slot"
            value={this.state.slot}
            onChange={this.handleChange}
          />

          <p>
            <button type="submit">Submit</button>
          </p>
        </form>

        {Object.keys(chest).map((item) => (
          <li>{chest[item].level}: 
          {chest[item].peices.map((peice) => peice)}</li>
        ))}
        
      </div>


    )
  };
};

// function App() {

  
//   const sort = () => {
//     console.log("i worked")
//   }
//   return (
//     <div className="App">
//       Helloooo
//       <button onClick={() => {sort()}}>Click</button>
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

export default App;
