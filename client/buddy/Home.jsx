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
        <div className="container">
          <div className="col  l12 m12 s12">
            <p id="title">
              Adopt the perfect dog
              from more than 16,000 animal shelters and rescues!
            </p>
          </div>
          <SearchBar />
        </div>
    )
  }
}
