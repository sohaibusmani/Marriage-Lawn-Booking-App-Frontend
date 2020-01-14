import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import PrimarySearchAppBar from './Components/AppBar/AppBar';
import LandingPage from './Screens/LandingPage/LandingPage';
import Login from './Screens/Login/Login';
import Register from './Screens/Register/Register';
import LawnDetails from './Screens/LawnDetails/LawnDetails'


class App extends React.Component{
 state={
   showLogin:false,
   showRegister:false,
   
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
      <Router>
      <React.Fragment>
          <PrimarySearchAppBar renderLogin={this.renderLogin}/>
          {
            this.state.showLogin && <Login renderRegister={this.renderRegister}/>
          }
          {
            this.state.showRegister && <Register/>
          }
          
          
          {/* Routing */}
          <Switch>
          <Route path='/LandingPage' exact component={LandingPage}/>
          <Route path='/Login' exact component={Login}/>
          <Route path='/LawnDetails'  component={LawnDetails}/>
          

        </Switch>
          
      </React.Fragment>
      </Router>
    )
  }
}

export default App;
