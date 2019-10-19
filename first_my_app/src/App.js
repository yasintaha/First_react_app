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
    var a = 'with the name first_my_app'
    return (
      <header className='App'>  
        <h3>first react app {a}</h3>
      </header>
    )
  }
}


export default App;
