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

  paginate() {
    return Session.get('petPagination');
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

                if(pet.media.photos != undefined){
                  return(
                    <div className ="col l4 m4 s12" key={pet.id.$t}>

                      <div className="card" >
                        <div className="card-image" >
                          <img src={pet.media.photos.photo[1].$t} className="circle responsive-img petPics" />
                        </div>

                        <div className="card-content">
                          <span className="truncate name"><i className="fa fa-paw left" aria-hidden="true"></i>{pet.name.$t}</span>
                          <span className="truncate name"><i className="fa fa-location-arrow left" aria-hidden="true"></i>{pet.contact.city.$t}, {pet.contact.state.$t}</span>
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
