let breedUrl = 'http://api.petfinder.com/breed.list?key=8b0acceef1c1b5f46f7b3ea0c3fa801d&format=json&animal=';
let searchUrl = 'http://api.petfinder.com/pet.find?key=8b0acceef1c1b5f46f7b3ea0c3fa801d&format=json&output=full&animal=dog&count=19';

//&location=07002&breed=&size=&sex=&age=

Meteor.methods({

  breedList: function(type){
    var animal = type.query;
    this.unblock();
    return HTTP.get(breedUrl + animal, {});
  },
  searchAll: function(query){
    let location = '&location=' + query.location;
    let breed = '&breed=' + query.breed;
    let size = '&size=' + query.size;
    let age = '&age=' + query.age;
    let gender = '&sex=' + query.gender;

    this.unblock();
    return HTTP.get(searchUrl + location + breed + size + age + gender, {});
  },

});
