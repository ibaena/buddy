let breedUrl = 'http://api.petfinder.com/breed.list?key=8b0acceef1c1b5f46f7b3ea0c3fa801d&format=json&animal=';
let searchUrl = 'http://api.petfinder.com/pet.find?key=8b0acceef1c1b5f46f7b3ea0c3fa801d&format=json&output=full&animal=dog';

//&breed=&size=&sex=&age=

Meteor.methods({

  breedList: function(type){
    var animal = type.query;
    console.log(animal);

    this.unblock();
    return HTTP.get(breedUrl + animal, {});
  },
  searchAll: function(type){


    this.unblock();
    return HTTP.get(searchUrl + animal, {});
  },

});
