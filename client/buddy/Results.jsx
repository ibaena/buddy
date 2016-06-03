import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Results extends TrackerReact(Component) {

  // Note: In ES6, constructor() === componentWillMount() in React ES5
  constructor() {
    super();
    Session.set('petSearch', []);
  }

  petSearch() {
    return Session.get('petSearch');
  }
 componentDidMount(){
   $('.slider').slider('start');

 }

  render() {

    return (
      <div id="results-wrapper">
        <div className="row">
            {
              this.petSearch().map((pet) => {
              console.log(pet);
                if(pet.media.photos != undefined){
                  return(
                    <div className ="col l6 m6 s12" key={pet.id.$t}>
                      <div className="card" >
                        <div className="image-wrapper" >
                          <img src={pet.media.photos.photo[1].$t} className="circle responsive-img petPics" />
                          <p>{pet.name.$t}</p>
                        </div>
                        <div className="card-reveal">
                          <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                          <p>{pet.description.$t}</p>
                        </div>
                      </div>
                    </div>
                  )
                }else{
                  console.log("failure");
                }

              })
            }
        </div>
      </div>
    )
  }
}
