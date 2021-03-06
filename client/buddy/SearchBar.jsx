import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class SearchBar extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
     this.state = { breedList: [] };
     if(Session.get('petSearch') === undefined){
        Session.set('petSearch', []);
     }

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
    if(error || res.data.petfinder.pets.pet === undefined) {
      console.log("error:", error);
      Bert.alert( 'Sorry we could not find your selection try again!', 'danger', 'fixed-top', 'fa-frown-o' );

    } else if (res.data.petfinder.lastOffset.$t  === '1') {
      console.log(res.data.petfinder);
      Session.set('petSearch',[res.data.petfinder.pets.pet]);
      FlowRouter.go('/search/');
    }
    else {
      console.log(res.data.petfinder.lastOffset.$t  );

      Session.set('petSearch',res.data.petfinder.pets.pet);
      Session.set('petPagination',res.data.petfinder.lastOffset);
      FlowRouter.go('/search/');

    }
  });

 }


  render() {

    return (
    <div className="row">
      <div className="card col l12 m12 s12" id="searchCard">
        <form className="" onSubmit={this.submitForm.bind(this)}>

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
            <button className="btn waves-effect waves-light black"  type="submit" >Search
            </button>
          </div>

        </form>
      </div>
    </div>
    )
  }
}
