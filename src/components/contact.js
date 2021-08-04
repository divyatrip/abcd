import React ,{Component} from 'react';
import color from './hoc/color';


class Contact extends Component{
    render(){
        return(
        <div>
            <h3>Contact component</h3>
        </div>
        )
    }
 }


 export default color(Contact);
