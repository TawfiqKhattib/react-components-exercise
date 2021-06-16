import Spam from "./Spam";
import React, { Component } from 'react';


class Spamalot extends Component {
    spamArr=function(){
        let arr=[]
        for(let i=0;i<500;i++){
            arr.push(<Spam />)
        }
        return arr
        }
    render(){
        return(
            this.spamArr().map(spam=>spam)
        )
    }
}

export default Spamalot

