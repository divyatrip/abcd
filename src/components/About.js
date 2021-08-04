import React ,{Component} from 'react';
import logo from '../logo1.jpeg';


class About extends Component{
    render(){
        return(
        <div>
            <h3>About component</h3>
            <img src={logo} width="500" alt="logo" />
            <img src={process.env.PUBLIC_URL + "/images.jpeg"} width="192" alt="second logo"/>
        </div>
        )
    }
 }


 export default About;
