var bookshelf = require('../commons/bookshelf');

require('./Dosage');
require('./Ticket');

var Invoice = bookshelf.Model.extend({
  tableName     : 'invoice',
  idAttribute   : 'invoice_id',
  hasTimestamps : true,
  dosage        : function() {
    return this.belongsTo('Dosage', 'dosage_id');
  },
  tickets       : function() {
    return this.hasMany('Ticket', 'invoice_id');
  }
});

module.exports = bookshelf.model('Invoice', Invoice);
