import React, { Component} from 'react';

import './styles.css';
import Sidebar from './components/sidebar';
import Main from './components/main'; 
import SearchBar from './components/searchbar';


class App extends Component {
  
  render() {
    return (
      <div className="wrapper">
        
        <Sidebar />
        <Main>
          <SearchBar ></SearchBar>
        </Main>
      
      </div>
      );
    }
}
  
  export default App;
  