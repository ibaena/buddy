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

    $('#animal-selection').change(function() {
      let animalType = $(this).val();

        Meteor.call("breedList",  {query: animalType}, (error, res) => {
         if(error) {
           console.log("error:", error);

         } else {
           console.log(res);
         }
       });

    });
 }



  render() {
    return (
    <div className="row">
      <form className="col s12">
        <div className="input-field col s2">
        <input id="zip" type="search" required />
        <label for="zip">Enter Your Zip Code</label>
        </div>

        <div className="input-field col s2" id="animal">
          <select id="animal-selection">
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="bird">Bird</option>
            <option value="reptile">Reptile</option>
            <option value="horse">Horse</option>
            <option value="pig">Pig</option>
            <option value="barnyard">Farm</option>
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

        <div className="input-field col s2" id="size">
          <select>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra large</option>
          </select>
          <label>Choose a Size</label>
        </div>

        <div className="input-field col s2" id="age">
          <select>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
          <label>Choose an Age</label>
        </div>

        <div className="input-field col s2" id="gender">
          <select>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          <label>Choose a Gender</label>
        </div>

      </form>
      <button className="btn waves-effect waves-light" type="submit" name="action">Submit
        <i className="material-icons right">send</i>
      </button>
    </div>
    )
  }
}
