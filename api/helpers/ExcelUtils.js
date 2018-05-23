var xlsx = require('node-xlsx').default;

class ExcelUtils {

  static createExcel(collection = []) {
    return xlsx.build([{
      name: 'main',
      data: collection
    }]);
  }
  
}

module.exports = ExcelUtils;
