import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title :'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke', 
    num_comments: 3, 
    points: 4, 
    objectID: 0
  },
  {
    title: 'Redux', 
    url: 'https://redux.js.org/', 
    author: 'Dan Abramov, Andrew Clark', 
    num_comments: 2, 
    points: 5, 
    objectID: 1, 
  },
]

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
        <h4>Iterating starts below</h4>
        <p>
          {list.map((val,index,arr)=>{
              return (
              <div>
                <h4>{index}</h4>
                <h3>{val.title}</h3>
                <h3>{val.author}</h3>
              </div>)
          })}
        </p>

      </header>
    )
  }
}


export default App;
