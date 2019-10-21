import React, { Component} from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import Sidebar from './components/sidebar';
import Main from './components/main'; 




// library.add(fab, faCheckSquare, faCoffee);


class App extends Component {
  
  
  
  render() {
    return (
      <div class="wrapper">
        
        <Sidebar />
        <Main />
      
      </div>
      );
    }
}
  
  export default App;
  