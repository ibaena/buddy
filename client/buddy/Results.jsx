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
   $('.slider').slider();

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
                <div className="col l4 m4 s12" key={pet.id.$t}>
                  <div className="card">
                    <div className="card-image">

                      {
                          pet.media.photos.photo.map((picture) => {

                            return(
                              <div className="slider">
                                <ul className="slides">
                                  <li>
                                    <img src={picture.$t} />
                                      <div className="caption center-align">
                                        <h3>{pet.name.$t}</h3>
                                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                            )
                          })
                      }
                  </div>
                    <p>{pet.name.$t}</p>
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
