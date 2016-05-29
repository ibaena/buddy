import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SearchBar extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();

  }

 componentDidMount(){
    $('select').material_select();
 }

  render() {
    return (
    <div className="row">
      <form className="col s12">
        <div className="input-field col s3">

        <input id="zip" type="search" required />
        <label for="zip">Enter Your Zip Code</label>
        </div>

        <div className="input-field col s2" id="animal">
          <select>
            <option value="0">Dog</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Choose an Animal</label>
        </div>

        <div className="input-field col s2" id="breed">
          <select>
            <option value="0">Pit Bull Terrier</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Choose a Breed</label>
        </div>

        <div className="input-field col s2" id="age">
          <select>
            <option value="0">Baby</option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label>Choose an Age</label>
        </div>

        <div className="input-field col s2" id="gender">
          <select>
            <option value="0">Male</option>
            <option value="1">Female</option>

          </select>
          <label>Choose a Gender</label>
        </div>

      </form>
    </div>
    )
  }
}
