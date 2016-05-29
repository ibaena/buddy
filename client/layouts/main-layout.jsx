import React from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

import Nav from '../buddy/Nav.jsx';

export const MainLayout = ({content}) => (

  <div className="main-wrapper">
    <Nav />
    <main>
      {content}
    </main>

  </div>
)
