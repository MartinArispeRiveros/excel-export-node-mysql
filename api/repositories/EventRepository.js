var Event = require('../models/Event');

class EventRepository {
    
  static getAllEvents() {
    return Event.collection().fetch();
  }

  static getEventById(id, fetch = {}) {
    return Event.where('event_id', id).fetch(fetch);
  }


}    

module.exports = EventRepository;
