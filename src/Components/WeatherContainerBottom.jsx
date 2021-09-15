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
              <Image>
              {<img  src={"http://openweathermap.org/img/wn/" + this.props.weather.icon + "@2x.png"} className="img-responsive"  alt = "WeatherIcon"/>} 
              </Image>
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
    padding-bottom: 0.5rem;
    border: 0.1rem solid white;
    border-bottom : None;
   
    
`;


const Temparature = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace !important;
    margin : auto;
`;

const Image = styled.div`
    margin : auto;
    height = 140rem; 
    width = 150rem;
`;



const Title  = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: 100;
    font-family: "Lucida Console", "Courier New", monospace !important;
    margin : 1rem auto;
`;