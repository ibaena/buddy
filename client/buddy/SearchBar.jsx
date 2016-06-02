import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SearchBar extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
     this.state = { breedList: [] };
  }




 componentDidMount(){
    $('select').material_select();

    Meteor.call("breedList",  {query: 'dog'}, (error, res) => {
     if(error) {
       console.log("error:", error);

     } else {
        this.setState({breedList: res.data.petfinder.breeds.breed});
     }
   });

 }

 submitForm(event){
   event.preventDefault();
   let location = (this.refs.location.value);
   let breed = (this.refs.breed.value);
   let size = (this.refs.size.value);
   let age = (this.refs.age.value);
   let gender = (this.refs.gender.value);

   Meteor.call("searchAll",  {location: location, breed: breed, size: size, age: age, gender:gender}, (error, res) => {
    if(error) {
      console.log("error:", error);

    } else {
      console.log(res.data.petfinder.pets);

    }
  });

 }




  render() {

    return (
    <div className="row">
      <form className="col l12 m12 s12" onSubmit={this.submitForm.bind(this)}>
        <div className="input-field col l2 m2 s12" id="zip-box">
        <input  id="zip" type="search" placeholder="Zip"  ref="location" required />
        </div>

        <div className="input-field col l2 m2 s12" id="breed">
          <select className="browser-default" ref="breed">
            <option value="" >Breed</option>
            {
              this.state.breedList.map((breed) => {
                return (

                  <option key={breed.$t} value={breed.$t}>{breed.$t}</option>
              )
            })
          }
          </select>
        </div>

        <div className="input-field col l2 m2 s12" id="size">
          <select className="browser-default" ref="size">
            <option value="" className="default-option">Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra large</option>
          </select>
        </div>

        <div className="input-field col l2 m2 s12" id="age">
          <select className="browser-default" ref="age">
            <option value="" >Age</option>
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="input-field col l2 m2 s12" id="gender">
          <select className="browser-default" ref="gender">
            <option value="" >Gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="input-field col l2 m2 s12" id="btn">
          <button className="btn waves-effect waves-light black" >Submit
            <i className="material-icons right">send</i>
          </button>
        </div>

      </form>

    </div>
    )
  }
}
