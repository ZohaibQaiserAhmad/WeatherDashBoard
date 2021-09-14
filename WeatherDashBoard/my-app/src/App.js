import './App.css';

//import cities component
import NewYork from './Components/NewYork'
import Tokyo from './Components/Tokyo'
import Toronto from './Components/Toronto'

//for container
import * as Styled from "./Style/styles";




function App() {

  return (
    <div className="App">
      
    
       <Styled.weatherContainer>
       <NewYork />
      </Styled.weatherContainer>
    </div>
  );
}

export default App;
