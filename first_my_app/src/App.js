import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './Sample'



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
        <p>
          {list.map((val,index,arr)=>{
              return (
                <div key={val.objectID}>
                    <span>
                      <a href={val.url}>{val.title}</a>
                    </span>
                    <span>
                      {val.author}
                    </span><br />
                    <span>
                      {val.num_comments}
                    </span>
                    <span>
                      {val.points}
                    </span>
                    <span>
                      {val.objectID}
                    </span>
                </div>
                )
          })}
        </p>
      </header>
    )
  }
}

export default App;
