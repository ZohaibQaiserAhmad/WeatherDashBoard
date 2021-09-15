//Import Statements
import React from 'react';
import axios from 'axios';


//for weather
import WeatherContainerTop from './WeatherContainerTop'
import WeatherContainerBottom from './WeatherContainerBottom'

//for container
import styled from 'styled-components';

//Extract day of week from object
function getDayOfWeek(date) {
  const dayOfWeek = new Date(date).getDay();    
  return isNaN(dayOfWeek) ? null : 
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][dayOfWeek];
}

//Export the weather from 3 cities as list
export default class City extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        weatherListCity: [],
        city : "New York",
        active : "New York"
      }
      this.handleClick = this.handleClick.bind(this);

    }

    //Default
    async fetchData(){
      axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+ this.state.city + '&appid=' + process.env.REACT_APP_WEATHER_API_KEY)
      .then(res => {
        const weatherList = res.data.list;

        //filter for only days (40 objects with 5 days will give us every 8 object being a new day - 5*8 = 40)
        var finalWeatherList = []

        for (var i = 1; i < weatherList.length; i+=8) {
          finalWeatherList.push(weatherList[i]);
        }

        //extract values we want

        //We want the icon, temparature, day of week and description of weather
        //Temparature is in kelvin, to get Celsius we will need to subtract by 273.15 - fixed to whole number
        //Icon is found within weather at the first index
        //Date can be found under dt_txt as year-month-day time format (remove time) - then use function to extract day of week
        //Description of weather is found within weather at first index
        var result = finalWeatherList.map(finalWeatherList => ({ day : getDayOfWeek(finalWeatherList.dt_txt.split(' ')[0]), icon: finalWeatherList.weather[0].icon, temp: (finalWeatherList.main.temp - 273.15).toFixed(0) + '\u00b0' , description : finalWeatherList.weather[0].description}));

        this.setState({ weatherListCity: result}, () => {
          //console.log(this.state.weatherListCity,'City');
        }); 

        })
      }
   
    //Default
    componentDidMount(){
        
      this.fetchData();
          
    }

    handleClick = param => e =>{

      this.setState({weatherListCity : [],city: param , active : param}, () => {
        console.log(param)
        this.fetchData();
      }); 

    }


    render() {

      return (
       
      <div>
      <div className="container" style={{display: "flex"}}>
      
      {['New York', 'Toronto', 'Tokyo'].map(city => 
                    <Button  key={city}  style={{color: this.state.active === city ? "#ADD8E6" : "black"}} onClick={this.handleClick(city)}>{city}</Button>
                )}
     
      </div>

      <WeatherContainer>
          {this.state.weatherListCity.filter((weather,index) => index === 0).map((weather,index) =>
            
            <WeatherContainerTop  weather = {weather} key = {index}/>

          )}

        <div className="container" style={{display: "flex"}}>
        {this.state.weatherListCity.filter((weather,index) => index > 0).map((weather,index) =>

          <WeatherContainerBottom weather = {weather} key = {index} />
            
       )}
   
      </div>
      </WeatherContainer>
      </div>    

      );
  }
}




//Styles
const fontsize = {
  H3FONTSIZE: '2rem',
}

const Button = styled.div`
border: none;
font-size: ${fontsize.H3FONTSIZE};
margin-left:16rem;
margin-right:10rem;
background: none;
align-self: right;
&:hover{
    color: blue;
  }
`;



const WeatherContainer = styled.div`
  border: 10px solid white;
  border-radius: 16px;
  margin: 1rem auto;
  background-color: #D4F1F4;
  height : 85vh;
  width : 70vw;
  box-shadow: 0 0 3pt 2pt #606060;
  
`;