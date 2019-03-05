import React, { Component } from 'react';
import DisplayResult from './Components/displayResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      method: 'metric',
      weightLabel: 'Weight(kg)',
      heightLabel: 'Height(cm)'
    }
  }
  render() {
    return (
      <div>
        <h1>BMI Converter</h1>
        <select id="method" value={this.state.method} onChange={(e) => {
            const method = e.target.value
            let heightLabel
            let weightLabel

            if (method === "metric") {
              weightLabel = "Weight(kg)"
              heightLabel = "Height(cm)"
            } else if (method === "imperial") {
              weightLabel = "Weight(lbs)"
              heightLabel = "Height(inches)"
            }

            this.setState({
              method: e.target.value,
              weightLabel: weightLabel,
              heightLabel: heightLabel
            })
          }
        }>
          <option value="metric" > Metric </option>
          <option value="imperial" > Imperial </option>
        </select>

        <div>
          <label>{this.state.weightLabel}</label>
          <input name="weight" value={this.state.weight} onChange={(e) => { this.setState({ weight: e.target.value }) }} />
        </div>

        <div>
          <label>{this.state.heightLabel}</label>
          <input name="height" value={this.state.height} onChange={(e) => this.setState({ height: e.target.value })} />
        </div>

        <DisplayResult
          weight={this.state.weight}
          height={this.state.height}
          method={this.state.method}
        />
      </div>
    );
  }
}

export default App;