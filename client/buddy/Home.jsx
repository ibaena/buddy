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
   $('.parallax').parallax();
 }

  render() {
    return (
      <div id="home-wrapper">

        <div className="parallax-container">
          <div className="parallax"><img src="http://www.atglenvet.com/wp-content/uploads/2014/09/lab.png" className=" paraImg" /></div>
        </div>

        <div className="section transparent">
          <div className="row container">
            <div className="col  l12 m12 s12">
              <p id="title">
                Adopt the perfect dog
                from more than 16,000 animal shelters and rescues!
              </p>
            </div>
            <SearchBar />
          </div>
        </div>


      </div>

    )
  }
}
