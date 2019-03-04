import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <label>Weight(kg)</label>
          <input name="weight" value={this.state.weight} onClick={this.setState({ weight: e.target.value})}/>
        </div>
        
        <div>
          <label>Height(cm)</label>
          <input name="height" value={this.state.height} onClick={this.setState({height: e.target.value})} />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
        />
      </div>
    );
  }
}

export default App;
