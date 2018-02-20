var bookshelf = require('../db/bookshelf');

require('./event');

var Payment = bookshelf.Model.extend({
  tableName   : 'payment',
  idAttribute : 'payment_id',
  event       : function() {
    return this.belongsTo('Event', 'event_id');
  }
});

module.exports = bookshelf.model('Payment', Payment);
