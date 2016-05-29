import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../buddy/Home.jsx';

FlowRouter.route('/',{
  action(){
      mount(MainLayout, {content: (<Home />)});
  }
});
