import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../buddy/Nav.jsx';
import Footer from '../buddy/Footer.jsx';

export const MainLayout = ({content}) => (

  <div className="main-wrapper">
    <header>
      <Nav />
    </header>

    <main>
      {content}
    </main>

    <footer className="page-footer grey lighten-5">
      <Footer  />
        <div className="footer-copyright grey lighten-5">
          <div className="container black-text">
          © 2014 Copyright Text
          <a className="black-text right" href="#!">More Links</a>
          </div>
        </div>
    </footer>

  </div>
)
