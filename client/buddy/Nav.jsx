import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Nav extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
 }

  render() {
    return (
      <nav className="black">
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu" id="menu-one">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-facebook fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-twitter fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-google-plus fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>

            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-youtube fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-instagram fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>

            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-pinterest fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>

            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x"></i>
                  <i className="fa fa-user fa-stack-1x black-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
