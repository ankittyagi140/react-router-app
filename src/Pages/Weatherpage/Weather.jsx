import React from 'react';
import Axios from 'axios';
import WeatherComp from '../../Component/Weather/Weather.component';
import InputForm from '../../Component/Inputform/Inputform';


class Weather extends React.Component {
    constructor(Props) {
        super(Props);
        this.state = {
            coords: {
                longitude: 45,
                latitude: 60
            },
            weather: [],
            inputdata: ""
        }
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            let newcoords = {
                longitude: position.coords.longitude,
                latitude: position.coords.latitude
            }
            this.setState({ coords: newcoords })
            console.log(this.state.coords)
        })
        Axios.get(`http://api.weatherstack.com/current?access_key=991aeea0d990bf8f3258c5f05efce587&query=
           ${this.state.coords.longitude},${this.state.coords.latitude}`)
            .then(response => {
                this.setState({weather:response})
                 console.log(this.state.weather)
                let weatherData = {
                    region: response.data.location.region,
                    location: response.data.location.name,
                    time: response.data.location.localtime,
                    temp: response.data.current.temperature,
                    humid: response.data.current.humidity,
                    press: response.data.current.pressure,
                    wind: response.data.current.wind_speed,
                    img: response.data.current.weather_icons,
                    description: response.data.current.weather_descriptions[0],
                    country: response.data.location.country
                }
                this.setState({ weather: weatherData })
                console.log(this.state.weather)
            })
            .catch(error => {
                console.log(error)
            })
         
       
    }
    submitHandler = (event) => {
        event.preventDefault();
        Axios.get( `http://api.weatherstack.com/current
        ?access_key=991aeea0d990bf8f3258c5f05efce587
        &query=${this.state.inputdata}`)
        .then(response=>{
            let weatherData = {
                region: response.data.location.region,
                location: response.data.location.name,
                time: response.data.location.localtime,
                temp: response.data.current.temperature,
                humid: response.data.current.humidity,
                press: response.data.current.pressure,
                wind: response.data.current.wind_speed,
                img: response.data.current.weather_icons,
                description: response.data.current.weather_descriptions[0],
                country: response.data.location.country
            }
            this.setState({ weather: weatherData })
        })


    }
    changeRegion = (event) => {
        this.setState({inputdata:event.target.value})
        console.log(this.state.inputdata)
        
       
    }
    render() {
       
        return (
            <div className="container">
                <form onSubmit={this.submitHandler}>
                    <WeatherComp wData={this.state.weather} />
                    <InputForm placeholder="Enter your location" value={this.state.inputdata} changeHandler={this.changeRegion} />
                </form>


            </div>
        )
    }
}
export default Weather;