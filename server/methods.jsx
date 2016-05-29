let petSearch = 'http://api.petfinder.com/breed.list?key=8b0acceef1c1b5f46f7b3ea0c3fa801d&format=json&animal=';

Meteor.methods({
  breedList: function(type){

    var animal = type.query;
    console.log(animal);

    this.unblock();
    return HTTP.get(petSearch + animal, {});
  },

});
