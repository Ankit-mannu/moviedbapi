import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';  
import './index.css';
import App from './App';
import MovieDetails from './MovieDetails';
import PopularMovie from './PopularMovie';
import reportWebVitals from './reportWebVitals';


const routing = (  
    <Router>  
      <div>    
        <Route path="/popular-movie" component={PopularMovie}/>  
        <Route path="/movie-details" component={MovieDetails} />  
        <Route path="/contact" component={App} />  
      </div>  
    </Router>  
  );

ReactDOM.render(
    routing
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
