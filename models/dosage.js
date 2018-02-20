var bookshelf = require('../db/bookshelf');

require('./invoice');

var Dosage = bookshelf.Model.extend({
  tableName   : 'dosage',
  idAttribute : 'dosage_id',
  invoices    : function() {
    return this.hasMany('Invoice', 'dosage_id')
  }
});

module.exports = bookshelf.model('Dosage', Dosage);
