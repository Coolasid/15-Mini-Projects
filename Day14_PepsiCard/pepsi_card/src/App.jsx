
import './App.css';
import  pepsiCan from './can-real-sugar-reg.png';
function App() {
  return (
    < >
        <div className='card'>
          <div className='circle'></div>
          <div className='content'>
            <h2>Pepsi Cola</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex laudantium enim optio? Odit ipsum quo blanditiis repudiandae.</p>
            <a href="#"> Buy Now</a>
          </div>
          <img src={pepsiCan} alt="pepsiCan"/>
        </div>
    </>
  );        
}

export default App;
