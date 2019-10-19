import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>Welcome to react</h1>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    var first_name = 'Rakesh'
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
