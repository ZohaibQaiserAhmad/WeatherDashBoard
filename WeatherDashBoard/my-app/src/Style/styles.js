import styled from 'styled-components';



const fontsize = {
    H3FONTSIZE: '50px',
  }




export const dailyWeatherContainerTop = styled.div`
    display: grid;
    position: relative;
    outline: 4px solid #FFFFFF;
    grid-template-rows: 1fr 15px 2fr 5fr;
    grid-template-columns: 1fr 0fr 30px 1.5fr;
    height : 50vh;
`;


export const dailyWeatherContainerBottom = styled.div`
    display: grid;
    position: relative;
    outline: 1px solid #FFFFFF;
    grid-template-rows: 1fr 15px 2fr 5fr;
    grid-template-columns: 1fr 0fr 30px 1.5fr;
    height : 50vh;
`;

export const horizontal = styled.div`
    display: "flex";
`;

export const Image = styled.div`
    grid-row: 2;
    grid-column: 2;

`;

export const Temparature = styled.div`
    grid-row: 3;
    grid-column: 3;
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;

export const TemparatureBottom = styled.div`
    grid-row: 5;
    grid-column: 2;
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: bold;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;

export const Description = styled.div`
    grid-row: 4;
    grid-column: 3;
    width : 100px;
    font-size: 25px;
    font-family: "Times New Roman", Times, serif !important;
`;


export const Title  = styled.div`
    grid-row: 1;
    grid-column: 2;
    font-size: ${fontsize.H3FONTSIZE};
    font-weight: 100;
    font-family: "Lucida Console", "Courier New", monospace !important;
`;


export const Column = styled.div`
  flex : ${(props) => props.size};
  
`;

export const weatherContainer = styled.div`
  border: 2px solid #FFFFFF;
  border-radius: 50px;
  margin: 20px auto;
  background-color: #D4F1F4;
  height : 100vh;
  width : 75vw;
  
  
`;


export const button = styled.div`
border: none;
padding: 10px;
background: none;
text-align: center;
`;

