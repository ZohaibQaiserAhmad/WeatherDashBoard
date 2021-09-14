//Import Statements
import React from 'react';
import axios from 'axios';

//for container
import * as Styled from "../Style/styles";


// Accepts a Date object or date string that is recognized by the Date.parse() method
function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

//Export the weather from 3 cities as list
export default class NewYork extends React.Component {
    state = {
      weatherListNY: []
    }

    componentDidMount(){
        axios.get('https://api.openweathermap.org/data/2.5/forecast?q=New%20York&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
        .then(res => {
          const weatherList = res.data.list;

          //filter for only days (40 objects with 5 days will give us every 8 object being a new day - 5*8 = 40)
          var finalWeatherList = []

          for (var i = 0; i < weatherList.length; i+=8) {
            finalWeatherList.push(weatherList[i]);
          }

          console.log(finalWeatherList)


          //extract values we want

          //We want the icon, temparature, day of week and description of weather
          //Temparature is in kelvin, to get Celsius we will need to subtract by 273.15 - fixed to whole number
          //Icon is found within weather at the first index
          //Date can be found under dt_txt as year-month-day time format (remove time) - then use function to extract day of week
          //Description of weather is found within weather at first index
          var result = finalWeatherList.map(finalWeatherList => ({ day : getDayOfWeek(finalWeatherList.dt_txt.split(' ')[0]), icon: finalWeatherList.weather[0].icon, temp: (finalWeatherList.main.temp - 273.15).toFixed(0) , description : finalWeatherList.weather[0].description}));

          this.setState({ weatherListNY: result }, () => {
            console.log(this.state.weatherListNY,'weatherListNY');
          }); 

          })
    }


    render() {
      return (

        <div>

         <Styled.H3>
          Today
          </Styled.H3>

        <Styled.dailyWeatherContainer>

        <Styled.Row>
        <Styled.Column size = {0}>{this.state.weatherListNY.filter((weather,idx) => idx == 0).map(weather => <div><img  src={"http://openweathermap.org/img/w/" + weather.icon + ".png"}  alt="boohoo" className="img-responsive" width = "100px"/></div>)} </Styled.Column>
        <Styled.H3>{this.state.weatherListNY.filter((weather,idx) => idx == 0).map(weather => weather.temp)} </Styled.H3>
        </Styled.Row>

        <Styled.Row>
        <Styled.H3>{this.state.weatherListNY.filter((weather,idx) => idx == 0).map(weather => weather.description)}  </Styled.H3>
        </Styled.Row>
        </Styled.dailyWeatherContainer>
        </div>
        

      );
  }

}

    
