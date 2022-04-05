
import './App.css';
import GenerateQr from './GenerateQr';
function App() {
  
  return (
    <div className="App">
      <h3 style={{alignContent:'center'}}>Restaurant Name : </h3>
      <div className="card" style={{display:'flex',flexWrap:'wrap-reverse'}}>
          <div>
          <GenerateQr />
          </div>
      </div>
    </div>
  );
}

export default App;
