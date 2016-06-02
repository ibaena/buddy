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
   console.log(this.refs.location.value);
   console.log(this.refs.breed.value);
   console.log(this.refs.size.value);
   console.log(this.refs.age.value);
   console.log(this.refs.gender.value);
 }




  render() {

    return (
    <div className="row">
      <form className="col s12" onSubmit={this.submitForm.bind(this)}>
        <div className="input-field col s2">
        <input id="zip" type="search" placeholder="Zip"  ref="location" required />
        </div>

        <div className="input-field col s2" id="breed">
          <select className="browser-default" ref="breed">

            {
              this.state.breedList.map((breed) => {
                return (

                  <option key={breed.$t} value={breed.$t}>{breed.$t}</option>
              )
            })
          }
          </select>
        </div>

        <div className="input-field col s2" id="size">
          <select className="browser-default" ref="size">
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra large</option>
          </select>
        </div>

        <div className="input-field col s2" id="age">
          <select className="browser-default" ref="age">
            <option value="Baby">Baby</option>
            <option value="Young">Young</option>
            <option value="Adult">Adult</option>
            <option value="Senior">Senior</option>
          </select>
        </div>

        <div className="input-field col s2" id="gender">
          <select className="browser-default" ref="gender">
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="input-field col s2" id="btn">
          <button className="btn waves-effect waves-light black" >Submit
            <i className="material-icons right">send</i>
          </button>
        </div>

      </form>

    </div>
    )
  }
}
