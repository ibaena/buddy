import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import SearchBar from './SearchBar.jsx';
import Results from './Results.jsx';


export default class Home extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
 }

  render() {
    return (
      <div id="home-wrapper">
        <div className="container">
          <SearchBar />
          <Results />
        </div>
      </div>
    )
  }
}
