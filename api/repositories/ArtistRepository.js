var Artist = require('../models/Artist');

class ArtistRepository {

  static getAllArtists() {
    return Artist.collection().fetch();
  }

  static getArtistById(id, fetch = {}) {
    return Artist.where('artist_id', id).fetch(fetch);
  }

}

module.exports = ArtistRepository;
