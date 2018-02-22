var Artist = require('../models/Artist');

class ArtistRepository {

  static getAllArtists() {
    return Artist.collection().fetch();
  }

}

module.exports = ArtistRepository;
