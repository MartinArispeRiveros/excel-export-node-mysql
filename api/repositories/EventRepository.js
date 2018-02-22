var Event = require('../models/Event');

class EventRepository {
    
  static getAllEvents() {
    return Event.collection().fetch();
  }

}    

module.exports = EventRepository;
