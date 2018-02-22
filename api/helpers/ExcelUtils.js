var xlsx = require('node-xlsx').default;

class ExcelUtils {

  static getBuffer (collection, name = 'main') {
    var data = [];
    for (var index = 0; index < collection.length; index++) {
      var dataRow = [];
      for (var value in collection[index]) {
        dataRow.push(collection[index][value]);
      }
      data.push(dataRow);
    }
    return xlsx.build([{name: name, data: data}]);
  }

}

module.exports = ExcelUtils;
