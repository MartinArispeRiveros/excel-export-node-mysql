var Event = require('../models/Event');

class EventRepository {
    
  static getAllEvents() {
    return Event.collection().fetch();
  }

  static getEventById(id, fetch = {}) {
    return Event.where('event_id', id).fetch(fetch);
  }

  static getAllEventTicketAccessLogInfoByEvent(event, fetch = {}) {
    return Event
      .collection()
      .query(function(qb) {
        qb
          .join('event_ticket_type', 'event.event_id', '=', 'event_ticket_type.event_id')
          .join('ticket', 'event_ticket_type.event_ticket_type_id', '=', 'ticket.event_ticket_type_id')
          .join('ticket_access_log', 'ticket_access_log.ticket_id', '=', 'ticket.ticket_id')
          .select('ticket.owner_name','ticket_access_log.*')
          .where('event.event_id', '=', event.get('event_id'));
      })
      .fetch();
  }

}

module.exports = EventRepository;
