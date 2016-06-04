import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'react-mounter';

import {MainLayout} from '../layouts/main-layout.jsx';
import Home from '../buddy/Home.jsx';
import List from '../buddy/List.jsx';
import SinglePet from '../buddy/SinglePet.jsx';

FlowRouter.route('/',{
  action(){
      mount(MainLayout, {content: (<Home />)});
  }
});
FlowRouter.route('/search',{
  action(){
      mount(MainLayout, {content: (<List />)});
  }
});
FlowRouter.route('/pet/:id/:name',{
  action(){
      mount(MainLayout, {content: (<SinglePet />)});
  }
});
