import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import './search.css';
import Lottie from 'react-lottie'
import axios from 'axios';

//Icon Imports
import submit from './Icons/submit.png';
import interface1 from './Icons/interface.png';
import movie from './Icons/movie.png';
import no_input from './Icons/no_input.png';

//Animation Import
import animationData from './Icons/loading_animation.json';

class App extends Component {

  constructor(props)
    {
        super(props)
        this.state={
          isloading:0,
          response:{
            genre:"Thriller",
            sub:"/ˈθrɪlə/",
            meaning:"A novel, play, or film with an exciting plot, typically involving crime or espionage.",
            sugestions:["The Invisible Navigation",
            "PreloadManager",
            "Parasite",
            "Bird Box",
            "Uncut Gems"]
          },
          plot:'',
        }
    }

  //Handle Change Function Starts
  plot_handlechange = (e) =>
  {
    this.setState({
      plot:e.target.value
    })
    console.log(this.state.plot)
  }
  //Handle Change Function Ends

  // Post Function Starts
  send_plot = () =>{
    if (this.state.plot != "")
    {
      this.setState({
        isloading:1
      })
      const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          data : {plot:this.state.plot},
          url:'http://127.0.0.1:5000/pred/'
        }
       //  console.log(this.send_book[0])
        var result = axios(options).then(res=>{
              console.log('Posted');
              alert("Sucessfull !");
              this.setState({
                response:res.data,
                plot:'',
                isloading:2
            })
              // this.fetch_genre()
        }).catch(error=>{
          console.log('Not Posted');
          console.log(error.response)
        })
    }
    else{
      this.setState({
        isloading:0
      })
    }
}
  // Post Function Ends

  // Get Function Starts
  fetch_genre = () =>{
    this.setState({
      plot:""
    })
    let res = axios.get("http://127.0.0.1:5000/committee/")
    .then(res=>{
        this.setState({
            response:res.data,
            isloading:2
        })
    }).catch(error=>{
        console.log(error.response)
     }) 
}
  // Get Function Ends

  render()
  {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };
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

        <div className = "row_1  pr-5 pl-5 pb-5" style = {{display:"flex",flexDirection:"row",height:"650px"}} >
          
          <div className="ml-3 mt-5" style = {{width:"40%",height:"60%",textAlign:"left",display:"block"}}>
            <form>
              <textarea className="shadow p-5 ml-5 font_custom" onChange = {this.plot_handlechange.bind(this)} placeholder="Enter movie plot here" style ={{width:"100%",height:"250px", background:"#272727",resize:"none", border:"none",borderRadius:"10px",ouline:"none !important", color:"white", fontSize:"18px"}}>
              </textarea><br></br>
              <Button type = "reset" waves="light" className = "mt-3 p-3 pl-5 pr-5" style = {{marginLeft:"650px", background:"#272727"}} onClick = {this.send_plot.bind(this)}>
                <img src ={submit} style={{height:"20px", width:"20px"}}></img>
              </Button>
            </form>
          </div>

          <div>
            <img  src ={submit} style={{height:"25%",alignItems:"center", width:"25%", marginTop:"17%",opacity:"0.9"}}></img>
          </div>

            {
              this.state.isloading == 0
                ?
                <div className = "font_custom" style = {{height:"100%", width:"30%",textAlign:"left",verticalAlign:"middle", marginTop:"-100px"}}>
                <center>
                <img src = {no_input}
                      height={420}
                      width={400}
                      style = {{alignSelf:"center",opacity:"0.4"}}
                  /></center>
               
                </div>
                :this.state.isloading == 1
                ?
                <div className = "font_custom" style = {{height:"100%", width:"30%",textAlign:"left", marginTop:"-100px"}}>
                  <Lottie options={defaultOptions}
                      height={400}
                      width={400}
                  />
                  <p className = "font_custom" style = {{textAlign:"center", fontSize:"30px", color:"white", opacity:"0.6"}}><i>Loading</i></p>
                </div>
                :
                <div className = "font_custom" style = {{height:"100%", width:"30%",textAlign:"left", marginTop:"-100px"}}>
                <div style= {{display:"flex",flexDirection:"row"}}>

                  <img  src ={movie} style={{height:"50px",verticalAlign:"middle", width:"50px", marginTop:"20px"}}></img>
                  <p className = "pl-3 ml-3 font_custom" style = {{color:"white",fontSize:"60px",verticalAlign:"middle",fontWeight:"bold",letterSpacing:"1.5px"}}>
                    {this.state.response.genre}<b style = {{color:"#03DAC6",fontSize:"40px"}}>.</b>
                  </p>
                </div>
                <p className="pl-5 ml-5" style = {{color:"#03DAC6",fontSize:"24px",verticalAlign:"middle",letterSpacing:"1.5px", marginTop:"-25px"}}>
                  {this.state.response.sub}
                </p>
                <p className="mt-5" style = {{color:"#03DAC6",fontSize:"22px",verticalAlign:"middle",letterSpacing:"1.5px"}}>
                  <i>Meaning:</i>
                </p>
                <p className="pl-3 ml-5 mt-3" style = {{color:"white",fontSize:"18px",verticalAlign:"middle"}}>
                {this.state.response.meaning}
                </p>
                <p className="mt-5" style = {{color:"#03DAC6",fontSize:"22px",verticalAlign:"middle",letterSpacing:"1.5px"}}>
                  <i>Suggestions:</i>
                </p>
                <p className="pl-3 ml-5 mt-3" style = {{color:"white",fontSize:"18px",verticalAlign:"middle"}}>
                    <ol>
                      {
                        // Listing Suggestions
                        this.state.response.sugestions.map((item,index) => {
                          return(
                          <li>{item}</li>
                          );
                        })
                      }

                    </ol>
                </p>
            </div>
            }
            
        </div>
        <p className = "font_custom" style = {{textAlign:"center", fontSize:"12px", color:"white", opacity:"0.6",marginTop:"-150px", letterSpacing:"1.5px"}}>
          A Project by group G - 19 for LP - III BE Computer Engineering
        </p>
        <p className = "font_custom" style = {{textAlign:"center", fontSize:"10px", color:"white", opacity:"0.6", letterSpacing:"1.5px"}}>
         Department of Computer Engineering, I<sup>2</sup>IT, Pune
        </p>
      </div>
    );
  }
}

export default App;
