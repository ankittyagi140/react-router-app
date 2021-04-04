import React from 'react';
import CalButton from '../../Component/Cal-button/Cal-button';
import InputForm from '../../Component/Inputform/Inputform';
import './Calculatorpage.css';
import { evaluate } from 'mathjs';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: ""
        }
    }

    addClick = (val) => {
        this.setState({ inputvalue: this.state.inputvalue + val })
    }
    addEqual = () => {
        this.setState({ inputvalue: evaluate(this.state.inputvalue).toFixed(2) })
    }
    addChange=(e)=>{
        this.setState({inputvalue:e.target.value})
    }
    render() {
        return (
            <div className="container">
                <h1 className="heading">Calculate With Me
                </h1>
                <div className="calcultor">
                    <InputForm className="input" value={this.state.inputvalue} changeHandler={this.addChange} />
                    <div className="custom-button" >
                        <div className="row">
                            <CalButton className="buttons" handleClickCal={this.addClick}>9</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>8</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>7</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>+</CalButton>
                        </div>
                        <div className="row">
                            <CalButton className="buttons" handleClickCal={this.addClick}>6</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>5</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>4</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>-</CalButton>
                        </div>
                        <div className="row">
                            <CalButton className="buttons" handleClickCal={this.addClick}>3</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>2</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>1</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>/</CalButton>
                        </div>
                        <div className="row">
                            <CalButton className="buttons" handleClickCal={this.addClick}>.</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>0</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addEqual}>=</CalButton>
                            <CalButton className="buttons" handleClickCal={this.addClick}>*</CalButton>
                        </div>
                        <div className="row">
                            <CalButton className="clear-button" handleClickCal={() => { this.setState({ inputvalue: "" }) }}>CE</CalButton>
                            <CalButton className="clear-button" handleClickCal={()=>{this.setState({inputvalue:this.state.inputvalue.slice(0,-1)})}}>C</CalButton>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Calculator;