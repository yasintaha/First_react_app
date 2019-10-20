import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  render(){
    var first_name = 'Rakesh changes made here'
    var last_name = 'patil'
    var label_style = {
      color:'blue'
    }
    return (
      <header className='App'>  
        <h3><label style={label_style }>First name : {first_name}</label></h3><br/>
        <h3><label style={label_style }>Last name : {last_name}</label></h3>
      </header>
    )
  }
}


export default App;
