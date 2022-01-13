import logo from './logo.svg';
import './App.css';


const App = () => {
  return (
    <div>
       <Headeer /> 
       <Technolojes />
      
    </div>
  );
}
const Headeer = () => {
  return( 
  <div>
    <h1>hello</h1>
    <h2>world</h2>
  </div>
  );
}
const Technolojes = () =>{
  return(
  <div>
    <ul>
        <li>CSS</li>
        <li>Html</li>
        <li> JavaScript</li>
      </ul>
  </div>

  );
}

export default App;
