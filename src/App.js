import React from 'react';

import PrimarySearchAppBar from './Components/AppBar/AppBar';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register'


class App extends React.Component{
  render(){
    return(
      <React.Fragment>
          <PrimarySearchAppBar/>
          {/* <Login/> */}
          <Register/>
      </React.Fragment>
    )
  }
}

export default App;
