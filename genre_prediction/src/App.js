import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './search.css';

class App extends Component {
  render()
  {
    return (
      <div className="App" >
        <div className = "heading p-5 mt-5 ml-5" >
            <p className = "font_custom" style = {{color: "white", fontSize: "70px",textAlign:"left",opacity:"0.9",letterSpacing:"5px"}}>
              <b>Genre Prediction</b><b style = {{color:"#03DAC6",fontSize:"90px"}}>.</b>
            </p>
            <p className = "font_custom " style = {{color: "white", fontSize: "18px",textAlign:"left",letterSpacing:"1.5px"}}>
              Prediction of <i style = {{color:"#03DAC6",fontSize:"22px"}}>movie genre</i> based on input movie plot implemented using <br></br> Python's Natural Language Toolkit(NLTK)
            </p>
        </div>
        <div className = "row_1 pt-2 pr-5 pl-5 pb-5" style = {{display:"flex",flexDirection:"row",height:"650px"}} >
          <div className="ml-3" style = {{width:"50%",height:"60%",textAlign:"left",display:"block"}}>
            <textarea className="shadow p-5 ml-5 font_custom" placeholder="Enter movie plot here" style ={{width:"70%",height:"80%", background:"#272727",resize:"none", border:"none",borderRadius:"10px",ouline:"none !important", color:"white", fontSize:"18px"}}>
            </textarea><br></br>
            <Button className = "mt-3" style = {{marginLeft:"600px", }}>
              Click me
            </Button>
            </div>
        </div>
      </div>
    );
  }
}

export default App;
