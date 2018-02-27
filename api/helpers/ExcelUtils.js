var xlsx = require('node-xlsx').default;

class ExcelUtils {

  static getBuffer (collection = [], headers = [], name = 'main') {
    var data = [];
    data.push(headers);

    collection.forEach(jsonObject => {
      var dataRow = [];
      for (var jsonAttribute in jsonObject) {
        dataRow.push(jsonObject[jsonAttribute]);
      }
      data.push(dataRow);
    });
    
    console.log(data);

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
