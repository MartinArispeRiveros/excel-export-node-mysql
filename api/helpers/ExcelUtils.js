var xlsx = require('node-xlsx').default;

class ExcelUtils {

  static getAdvancedString(jsonAttribute) {
    if ( Object.prototype.toString.call(jsonAttribute) === "[object Date]" ) {
      var formatDate = jsonAttribute.toISOString();
      return formatDate.substr(0, 10) + ' ' + formatDate.substr(11, 8);
    }
    return jsonAttribute;
  }

  static jsonToArray (collection = []) {
    var data = [];
    collection.forEach(jsonObject => {
      var dataRow = [];
      for (var jsonAttribute in jsonObject) {
        dataRow.push(this.getAdvancedString(jsonObject[jsonAttribute]));
      }
      data.push(dataRow);
    });
    return data;
  }

  static getBuffer (collection = [], headers = [], name = 'main') {
    var data = [];
    data.push(headers);
    data = data.concat(collection);
    return xlsx.build([{
      name: name,
      data: data
    }, 
    {
      cellDates: true
    }]);
  }

}

module.exports = ExcelUtils;
