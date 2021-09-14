//Import Statements
import React from 'react';
import axios from 'axios';


//Export the weather from 3 cities as list
export default class Tokyo extends React.Component {
    state = {
      weatherListTokyo: []
    }

    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=Tokyo&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
        .then(res => {
          const weatherList = res.data.list;

          //filter for only days (40 objects with 5 days will give us every 8 object being a new day - 5*8 = 40)
          var finalWeatherList = []

          for (var i = 0; i < weatherList.length; i+=8) {
            console.log(weatherList[i])
            finalWeatherList.push(weatherList[i]);
          }

       

          this.setState({ finalWeatherList });
          })
    }


    render() {
      return (
        <ul>
          { this.state.weatherListTokyo}
        </ul>
      )
    }


    

}