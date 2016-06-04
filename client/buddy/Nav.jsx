import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class Nav extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
    $(".button-collapse").sideNav();
    $(".user").sideNav();
 }

  render() {
    return (
    <div className="navbar-fixed">
      <nav className="white">
        <div className="nav-wrapper">
          <a href="" data-activates="mobile-demo" className="button-collapse black-text right"><i className="material-icons">menu</i></a>
          <ul id="nav-mobile" className="left hide-on-med-and-down">
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu" id="menu-one">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-facebook fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-twitter fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-youtube fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-instagram fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>

            </li>
            <li>
              <a href="">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-pinterest fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>

            </li>
            <li>
              <a href="/">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-home fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
            <li>
              <a href="" data-activates="mobile-demo" className="user">
                <span className="fa-stack fa-lg menu">
                  <i className="fa fa-circle fa-stack-2x black-text"></i>
                  <i className="fa fa-user fa-stack-1x white-text" aria-hidden="true"></i>
                </span>
              </a>
            </li>
          </ul>

          <ul className="side-nav" id="mobile-demo">
            <li>
              <img className="circle" alt="profile" src="http://placehold.it/100x100" />
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}
