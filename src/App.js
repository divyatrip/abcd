import './App.css';
//import Header from './components/header';
import {ThemeProvider} from "@material-ui/styles";
import {Router, Route ,Switch} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import theme from "./components/theme";
import {View, Text} from 'react-native';
import Post from './components/post';
import Client from './components/client';
//import {Link} from "react-router-dom";
//import logo from './logo.svg';
//import App from './Components/App';
//import React from "react";


function App() {
  return (
    <div id="parent">
    <div>
      
      <div
      style={{
         backgroundImage: `url("images.jpeg")`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: 'cover',
         backgroundPosition:'center',
         width:'auto',
         height:'1000px',
         color:'white'
      }}>

       
        
      </div>
      <View style={{position: 'absolute', top: '50px', left: '60px', right: 0, bottom: 0, justifyContent: 'top', alignItems: 'left'}}>
       <Text style={{ fontSize: 40 ,fontWeight: 'bold' , color: 'red'  }} >Tortilicious</Text>
      </View>
      </div> 

      <Post/>
      <Client name="Peter" email="peter@gmail.com" phone="9076542213" />

     <ThemeProvider theme={theme}>
     <BrowserRouter>     
     <Switch>
       <Route excat path="/" component={()=> <div>Home</div>}/>
       <Route excat path="/services" component={()=> <div>Services</div>}/>
       <Route excat path="/about" component={()=> <div>About Us</div>}/>
       <Route excat path="/contact" component={()=> <div>Contact Us</div>}/>
       <Route excat path="/signup" component={()=> <div>Sign Up</div>}/>
     </Switch>
      hello!
     </BrowserRouter>
    
     </ThemeProvider>
     </div>

  );
}

export default App;

  /*<div>
    <img src={Logo} width="50" alt="logo"/>
  </div>*/
        
