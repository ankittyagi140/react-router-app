import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import CounterPage from './Pages/counterpage/Counter';
import HomePage from './Pages/Homepage/Homepage';
import Todo from './Pages/Todopage/Todo';
import Weather from './Pages/Weatherpage/Weather';
import ApiPage from './Pages/Apipage/Apipage';
import Calculator from './Pages/Calculatorpage/Calculatorpage';


function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/todo' component={Todo} />
        <Route exact path='/counter' component={CounterPage}/>
        <Route exact path='/weather' component={Weather}/>
        <Route exact path='/api' component={ApiPage}/>
        <Route exact path='/calculator' component={Calculator}/>
        <Route exact path='/signup' component ={Signup}/>
        <Route exact path='/signin' component={Signin}/>
      </Switch>
    </div>

  )
}
export default App;