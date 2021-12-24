import React from 'react';
import './App.css';
import {Route, Switch } from "react-router-dom";
import Login from './Components/Login/Login';
import FeatureAdd from './Components/FeatureAdd/FeatureAdd';
import Caravanning from './Components/Caravanning/Caravanning';
import Home from './Components/Home/Home';
import MaximiseTrip from './Components/MaximiseTrip/MaximiseTrip';
import Addsubtitle from './Components/Caravanning/Addsubtitle';
import TripDetail from './Components/TripDetail/TripDetail';
import Crewmember from './Components/Crewmember/Crewmember';
import CovidSafety from './Components/CovidSafety/CovidSafety';
import Feedback from './Components/Feedback/Feedback';
import FAQ from './Components/FAQ/FAQ';



function App() {
  return (
    <>
   
      <Switch>
      <Route exact path="/" component={Login}/>
      <Route exact path="/home" component={Home}/>
      <Route exact path="/featureadd" component={FeatureAdd}/>
      <Route exact path="/Caravanning" component={Caravanning}/>
      <Route exact path="/trip" component={MaximiseTrip}/>
      <Route exact path="/subtitle" component={Addsubtitle}/>
      <Route exact path="/tripdetail" component={TripDetail}/>
      <Route exact path="/crew" component={Crewmember}/>
      <Route exact path="/safety" component={CovidSafety}/>
      <Route exact path="/feedback" component={Feedback}/>
      <Route exact path="/faq" component={FAQ}/>
     
    
      </Switch>
   
   
    </>
  );
}

export default App;
