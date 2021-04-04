import React from 'react';
import CustomButton from '../../Component/Custombutton/Custombutton';
import './Counter.css';

class CounterPage extends React.Component {
    constructor() {
        super();
        this.state = {
            counter:0
        }
    }
    CounterHandler = () => {
        const {counter}=this.state
        this.setState({ counter:counter+1 })
    }
    CounterDecrease=()=>{
        const{counter}=this.state
        this.setState({counter:counter-1})
        if(counter<=1){
        alert("Reset your counter")
        
        }
    }
    CounterReset=()=>{
        this.setState({counter:0})
    }
    render() {
        return (
            <div className="counter-page">
                <h1>This is a counter</h1>
                <div className="counter">
                    <span>{this.state.counter}</span>
                </div>
                <CustomButton className="button" onClick={this.CounterHandler}>Increase</CustomButton>
                <CustomButton onClick={this.CounterDecrease}>Decrease</CustomButton>
                <CustomButton onClick={this.CounterReset}>Reset</CustomButton>
            </div>

        )
    }
}
export default CounterPage;