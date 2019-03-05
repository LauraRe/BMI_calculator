import React, { Component } from 'react';
import { bmiCalculation } from '../Modules/BMICalculator';
import { Message, Segment } from 'semantic-ui-react'

class DisplayResult extends Component {
    calculate() {
        let weight = this.props.weight;
        let height = this.props.height;
        let method = this.props.method;
        
        return bmiCalculation(weight, height, method);
    }

    render() {
        return (
            <div id='response'>
                {this.calculate()}
            </div>
        )
    }
}

export default DisplayResult