import React, { Component } from 'react'

//for container
import styled from 'styled-components';

export default class WeatherContainerTop extends Component {

    render() {
    
        return (
            <DailyWeatherContainer>

              <Title>
                Today
              </Title>
              <Container>
                <div>
                {<img  src={"http://openweathermap.org/img/wn/" + this.props.weather.icon + "@2x.png"} className="img-responsive"  alt = "WeatherIcon" height = "200rem" width = "200rem"/>} 
                </div>
                <TemperatureContainer>
                  <Temperature>
                  {this.props.weather.temp}
                  </Temperature>

                  <Description>
                  {this.props.weather.description}
                  </Description>
                </TemperatureContainer>
                
              </Container>
          
          </DailyWeatherContainer>
        )
    }
}

//Styles
const fontsize = {
  H3FONTSIZE: '2rem',
}

const DailyWeatherContainer = styled.div`
    height : 50vh;
    display:flex;
    flex-direction: column;
    justify-content:center:
    align-items:center;
    padding: 24px;
`;



const Temperature = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;
const TemperatureContainer = styled.div`
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center; 
`;
const Container = styled.div`

    display:flex;
    flex-direction: row;
    justify-content:center;
    align-items:center; 
    
`;

const Description = styled.div`
    width : 2rem;
    font-size: 2rem;
    font-family: "Times New Roman", Times, serif !important;
`;

const Title  = styled.div`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: 100;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;



