import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

export const weatherContainer = styled.div`
  font-size: 5px;
  border: 2px solid #FFFFFF;
  border-radius: 5px;
  overflow: visible;
  width: 500px;
  margin: 50px auto;
  background-color: #D4F1F4;
  padding: 10em 10em;
  
  
`;

export const dailyWeatherContainer = styled.div`
`;

export const Row = styled.div`
  display: flex
  margin 50px auto;
`;


export const Column = styled.div`
  flex : ${(props) => props.size}
`;

const fontsize = {
    H3FONTSIZE: '30px',
  }
  
  export const H3 = styled.h3`
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: 10;
    font-family:  'Roboto Condensed', sans-serif;
  `;