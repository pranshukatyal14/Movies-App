
import React from 'react';
import './App.css';
import MoviesList from './containers/moviesList/moviesList';

import Navigator from './navigator';




class App extends React.Component {
  render(){
    return(
      <div className="App">
        
    <Navigator/>

      
      </div>
    );
  }
}

export default App;
