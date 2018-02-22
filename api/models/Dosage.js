var bookshelf = require('../commons/bookshelf');

require('./Invoice');

var Dosage = bookshelf.Model.extend({
  tableName   : 'dosage',
  idAttribute : 'dosage_id',
  invoices    : function() {
    return this.hasMany('Invoice', 'dosage_id')
  }
});

module.exports = bookshelf.model('Dosage', Dosage);
