import React from 'react';

import PrimarySearchAppBar from './Components/AppBar/AppBar';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register'


class App extends React.Component{
 state={
   showLogin:false,
   showRegister:false
 }

 renderLogin = () => {
   this.setState({
     showLogin:true
   })
 }

renderRegister = () => {
  this.setState({
    showLogin:false,
    showRegister:true
  })
}

  render(){
    return(
      <React.Fragment>
          <PrimarySearchAppBar renderLogin={this.renderLogin}/>
          {
            this.state.showLogin && <Login renderRegister={this.renderRegister}/>
          }
          {
            this.state.showRegister && <Register/>
          }
          {
            !this.state.showLogin && !this.state.showRegister && <LandingPage/>
          }
          
      </React.Fragment>
    )
  }
}

export default App;
