import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Footer extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
 }

  render() {
    return (
      <footer className="page-footer white">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <h5 className="black-text">DogFinder</h5>
              <p className="black-text">Follow Us</p>
                <ul id="menu" className="black-text">
                  <li>
                    <a href="">
                      <span className="fa-stack fa-lg menu">
                        <i className="fa fa-circle fa-stack-2x blue-darken-4-text"></i>
                        <i className="fa fa-facebook fa-stack-1x white-text" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa-stack fa-lg menu">
                        <i className="fa fa-circle fa-stack-2x blue-lighten-4-text"></i>
                        <i className="fa fa-twitter fa-stack-1x white-text" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa-stack fa-lg menu">
                        <i className="fa fa-circle fa-stack-2x brown-text"></i>
                        <i className="fa fa-instagram fa-stack-1x white-text" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <span className="fa-stack fa-lg menu">
                        <i className="fa fa-circle fa-stack-2x black-text"></i>
                        <i className="fa fa-github fa-stack-1x white-text" aria-hidden="true"></i>
                      </span>
                    </a>
                  </li>
                </ul>
            </div>
            <div className="col l4 offset-l2 s12">
              <h5 className="black-text">Popular Pet Resources</h5>
              <ul>
                <li><a className="black-text" href="http://www.sopets.com/">SoPets</a></li>
                <li><a className="black-text" href="http://www.onlynaturalpet.com/">Only Natural Pet Store</a></li>
                <li><a className="black-text" href="http://www.bringfido.com/">BringFido</a></li>
                <li><a className="black-text" href="http://www.webvet.com/main/">Web Vet</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright transparent">
          <div className="container">
          © 2014 Copyright Text
          <a className="black-text right" href="#!">More Links</a>
          </div>
        </div>
      </footer>
    )
  }
}
