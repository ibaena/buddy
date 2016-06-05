import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';



export default class Results extends TrackerReact(Component) {

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
    $('.materialboxed').materialbox();

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
                        <div className="card hvr-bob " >

                          <div className="card-image" >
                            <img src={pet.media.photos.photo[1].$t} className=" petPics" width="300"/>
                          </div>

                          <div className="card-content">
                            <a href={"/pet/"+pet.id.$t+"/"+pet.name.$t} ><i className="fa fa-info-circle fa-2x right" aria-hidden="true"></i></a>
                            <span className="truncate name">
                              <i className="fa fa-paw left" aria-hidden="true"></i>
                              {pet.name.$t}
                            </span>
                            <span className="truncate name">
                              <i className="fa fa-location-arrow left" aria-hidden="true"></i>
                              {pet.contact.city.$t}, {pet.contact.state.$t}
                            </span>

                          </div>

                        </div>

                    </div>
                  )
                }else{
                  console.log("result had no images need to fix");
                }

              })
            }
        </div>
      </div>
    )
  }
}
