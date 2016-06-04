import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class SinglePet extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

  petSearch() {
    return Session.get('petSearch');
  }

  paginate() {
    return Session.get('petPagination');
  }

  componentDidMount(){


 }


  render() {

    return (
      <p>single Pet yo!!</p>
    )
  }
}
