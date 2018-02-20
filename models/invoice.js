var bookshelf = require('../db/bookshelf');

require('./dosage');
require('./ticket');

var Invoice = bookshelf.Model.extend({
  tableName   : 'invoice',
  idAttribute : 'invoice_id',
  dosage      : function() {
    return this.belongsTo('Dosage', 'dosage_id');
  },
  tickets     : function() {
    return this.hasMany('Ticket', 'invoice_id');
  }
});

module.exports = bookshelf.model('Invoice', Invoice);
