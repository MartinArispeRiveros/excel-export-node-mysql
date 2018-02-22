var Artist = require('../models/Artist');

class ArtistRepository {

  static getAllArtists() {
    return Artist.collection().fetch().then(function(collection) {
      return collection.toJSON();
    });
  }

}

module.exports = ArtistRepository;
