var xlsx = require('node-xlsx').default;

class Excel {

  static getBuffer(collection) {
    var data = [];
    for (var index = 0; index < collection.length; index++) {
      var dataRow = [];
      for(var value in collection[index]) {
        dataRow.push(collection[index][value]);
      }
      data.push(dataRow);
    }
    return xlsx.build([{name: "main", data: data}]);
  }
  
}

module.exports = Excel;
