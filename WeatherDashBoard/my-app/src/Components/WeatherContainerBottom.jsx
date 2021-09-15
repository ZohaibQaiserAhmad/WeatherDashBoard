//imports
import React, { Component } from 'react'

//for container
import styled from 'styled-components';

export default class WeatherContainerBottom extends Component {

    render() {
        return (
            <DailyWeatherContainer>

              <Title>
                {this.props.weather.day}
              </Title>
              <div>
              {<img  src={"http://openweathermap.org/img/wn/" + this.props.weather.icon + "@2x.png"} className="img-responsive"  alt = "WeatherIcon" height = "150rem" width = "150rem"/>} 
              </div>
              <Temparature>
              {this.props.weather.temp}
              </Temparature>

              
          
            </DailyWeatherContainer>
        )
    }
}

//styles
const fontsize = {
    H3FONTSIZE: '2rem',
  }

const DailyWeatherContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:centre;
    flex:0.25;
    padding-bottom: 30px;
    border: 1px solid white;
   
    
`;


const Temparature = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;

const Title  = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: 100;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;